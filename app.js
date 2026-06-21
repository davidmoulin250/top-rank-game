(() => {
  'use strict';

  // ============ Utilities ============
  const $  = (sel) => document.querySelector(sel);
  const $$ = (sel) => Array.from(document.querySelectorAll(sel));

  const STORAGE_KEY = 'top10-showdown-state-v2';

  function normalize(str) {
    return String(str || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '')
      .replace(/&/g, ' and ')
      .replace(/[^a-z0-9]+/g, ' ')
      .trim();
  }
  function pickRandom(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  // ============ State ============
  // mode: 'local' | 'online'
  // local-mode players: [{name,total}, {name,total}], currentTurn is 0 or 1
  // online-mode: host is index 0, guest is index 1. `me` = which one I am.
  const defaultState = () => ({
    mode: 'local',
    role: null,                  // online: 'host' | 'guest'
    me: 0,                       // index of myself in players[]
    players: [{ name: '', total: 0 }, { name: '', total: 0 }],
    currentTurn: 0,              // local mode only
    startingPlayer: 0,           // alternates each round (local mode)
    currentCategoryId: null,
    roundNumber: 1,
    secondsPerTurn: 60,
    targetScore: 100,            // null = no limit
    roundProgress: 'idle',       // local: idle|p0_done|both_done; online: idle|playing|done
    roundResults: [null, null],  // {matchedIndexes, score}
    playedIds: [],
    history: [],                 // {categoryId, prompt, p1Score, p2Score}
    roundStartsAt: null,         // online sync timing
  });

  let state = defaultState();

  function loadState() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null'); } catch { return null; }
  }
  function saveState() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch {}
  }
  function clearSavedState() { localStorage.removeItem(STORAGE_KEY); }

  // Per-turn ephemeral
  let timerInterval = null;
  let turnEndsAt = 0;
  let currentMatchedIdx = new Set();
  let currentScore = 0;
  let myTurnSubmitted = false;

  // Opponent (online) live progress
  let opponentProgress = { foundCount: 0, score: 0, done: false };

  // ============ Screens ============
  function showScreen(id) {
    $$('.screen').forEach((el) => el.classList.toggle('active', el.id === id));
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  // ============ Mode picker ============
  function initModePicker() {
    $$('.mode-card').forEach((btn) => {
      btn.addEventListener('click', () => {
        const mode = btn.dataset.mode;
        if (mode === 'local') {
          state = defaultState();
          state.mode = 'local';
          showScreen('screen-welcome');
          setTimeout(() => $('#input-p1').focus(), 50);
        } else {
          state = defaultState();
          state.mode = 'online';
          showOnlineEntry();
        }
      });
    });
    $$('.link-btn.back').forEach((btn) => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.goto;
        if (target === 'screen-mode' && state.mode === 'online') {
          // Tear down any pending net state
          if (window.Net) Net.leave();
        }
        showScreen(target);
      });
    });
  }

  // ============ Local welcome ============
  function initLocalWelcome() {
    const p1 = $('#input-p1');
    const p2 = $('#input-p2');
    const sec = $('#input-seconds');
    const btnStart = $('#btn-start');
    const btnResume = $('#btn-resume');

    const saved = loadState();
    if (saved && saved.mode === 'local' && saved.players[0].name && saved.players[1].name && (saved.history.length || saved.roundNumber > 1)) {
      p1.value = saved.players[0].name;
      p2.value = saved.players[1].name;
      sec.value = String(saved.secondsPerTurn || 60);
      btnResume.hidden = false;
      btnResume.textContent = `Resume game (round ${saved.roundNumber}, ${saved.players[0].name} ${saved.players[0].total} – ${saved.players[1].total} ${saved.players[1].name})`;
    }

    function update() {
      btnStart.disabled = !(p1.value.trim() && p2.value.trim());
      btnStart.style.opacity = btnStart.disabled ? 0.5 : 1;
    }
    [p1, p2].forEach((el) => el.addEventListener('input', update));
    update();

    const tgt = $('#input-target');
    btnStart.addEventListener('click', () => {
      if (!p1.value.trim() || !p2.value.trim()) return;
      state = defaultState();
      state.mode = 'local';
      state.players[0].name = p1.value.trim().slice(0, 20);
      state.players[1].name = p2.value.trim().slice(0, 20);
      state.secondsPerTurn = parseInt(sec.value, 10) || 60;
      state.targetScore = tgt.value ? parseInt(tgt.value, 10) : null;
      saveState();
      nextCategory();
    });

    btnResume.addEventListener('click', () => {
      state = loadState();
      state.secondsPerTurn = parseInt(sec.value, 10) || state.secondsPerTurn || 60;
      state.roundProgress = 'idle';
      state.roundResults = [null, null];
      showCategoryScreen();
    });

    p1.addEventListener('keydown', (e) => { if (e.key === 'Enter') p2.focus(); });
    p2.addEventListener('keydown', (e) => { if (e.key === 'Enter' && !btnStart.disabled) btnStart.click(); });
  }

  // ============ Online entry ============
  function showOnlineEntry() {
    const params = new URLSearchParams(location.search);
    const incomingCode = (params.get('room') || '').toUpperCase().slice(0, 4);
    if (incomingCode) {
      $('#online-code').value = incomingCode;
    }
    $('#online-error').hidden = true;
    showScreen('screen-online');
    setTimeout(() => $('#online-name').focus(), 50);
  }

  function showOnlineError(msg) {
    const el = $('#online-error');
    el.hidden = false;
    el.textContent = msg;
  }

  function initOnlineEntry() {
    const name = $('#online-name');
    const code = $('#online-code');
    const btnCreate = $('#btn-create-room');
    const btnJoin = $('#btn-join-room');
    const sec = $('#online-seconds');

    code.addEventListener('input', () => {
      code.value = code.value.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 4);
    });
    name.addEventListener('keydown', (e) => { if (e.key === 'Enter') code.focus(); });
    code.addEventListener('keydown', (e) => { if (e.key === 'Enter' && code.value.length === 4) btnJoin.click(); });

    const tgt = $('#online-target');
    btnCreate.addEventListener('click', async () => {
      const nm = name.value.trim().slice(0, 20);
      if (!nm) { showOnlineError('Enter your name first.'); name.focus(); return; }
      btnCreate.disabled = true;
      btnCreate.textContent = 'Creating…';
      try {
        const { code } = await Net.createRoom(nm);
        state = defaultState();
        state.mode = 'online';
        state.role = 'host';
        state.me = 0;
        state.players[0].name = nm;
        state.players[1].name = '';
        state.secondsPerTurn = parseInt(sec.value, 10) || 60;
        state.targetScore = tgt.value ? parseInt(tgt.value, 10) : null;
        attachNetHandlers();
        showLobby(code);
      } catch (err) {
        showOnlineError(err.message || 'Failed to create room.');
      } finally {
        btnCreate.disabled = false;
        btnCreate.textContent = 'CREATE ROOM';
      }
    });

    btnJoin.addEventListener('click', async () => {
      const nm = name.value.trim().slice(0, 20);
      const cd = code.value.trim().toUpperCase();
      if (!nm) { showOnlineError('Enter your name first.'); name.focus(); return; }
      if (cd.length !== 4) { showOnlineError('Room code is 4 characters.'); code.focus(); return; }
      btnJoin.disabled = true;
      btnJoin.textContent = 'Joining…';
      try {
        await Net.joinRoom(cd, nm);
        state = defaultState();
        state.mode = 'online';
        state.role = 'guest';
        state.me = 1;
        state.players[0].name = '?';   // filled in via presence
        state.players[1].name = nm;
        attachNetHandlers();
        // Ask host for a snapshot in case game is mid-flow
        setTimeout(() => Net.send('snapshot_request', {}), 500);
        showLobby(cd);
      } catch (err) {
        showOnlineError(err.message || 'Failed to join room.');
      } finally {
        btnJoin.disabled = false;
        btnJoin.textContent = 'JOIN ROOM';
      }
    });
  }

  // ============ Lobby ============
  function shareableLink(code) {
    const url = new URL(location.href);
    url.searchParams.set('room', code);
    return url.toString();
  }

  function showLobby(code) {
    $('#lobby-code').textContent = code;
    $('#lobby-link').value = shareableLink(code);
    $('#lobby-p1-name').textContent = state.players[0].name || '…';
    $('#lobby-p2-name').textContent = state.players[1].name || 'Waiting…';
    $('#lobby-p1').classList.toggle('connected', !!state.players[0].name && state.players[0].name !== '?');
    $('#lobby-p2').classList.toggle('connected', !!state.players[1].name);
    $('#lobby-p2').classList.toggle('waiting', !state.players[1].name);
    renderLobbyRules();
    updateLobbyStartButton();
    showScreen('screen-lobby');
  }

  function renderLobbyRules() {
    const rules = $('#lobby-rules');
    if (!rules) return;
    const pills = [
      `<span class="rule-pill"><span class="lbl">⏱</span>${state.secondsPerTurn}s / turn</span>`,
      state.targetScore
        ? `<span class="rule-pill"><span class="lbl">🏁</span>First to ${state.targetScore} pts</span>`
        : `<span class="rule-pill"><span class="lbl">∞</span>No score limit</span>`,
    ];
    rules.innerHTML = pills.join('');
  }

  function updateLobbyStartButton() {
    const btn = $('#btn-lobby-start');
    if (state.role === 'host') {
      const ready = state.players[0].name && state.players[1].name && state.players[1].name !== '?';
      btn.disabled = !ready;
      btn.style.opacity = ready ? 1 : 0.5;
      btn.textContent = ready ? 'START GAME' : 'Waiting for guest…';
      btn.hidden = false;
    } else {
      btn.hidden = true;
    }
  }

  function initLobby() {
    $('#btn-copy-link').addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText($('#lobby-link').value);
        const btn = $('#btn-copy-link');
        const orig = btn.textContent;
        btn.classList.add('copied');
        btn.textContent = 'Copied!';
        setTimeout(() => { btn.textContent = orig; btn.classList.remove('copied'); }, 1500);
      } catch {
        $('#lobby-link').select();
      }
    });
    $('#btn-lobby-leave').addEventListener('click', () => leaveOnline());
    $('#btn-lobby-start').addEventListener('click', () => {
      if (state.role !== 'host') return;
      nextCategory();
    });
  }

  function leaveOnline() {
    if (window.Net) Net.leave();
    state = defaultState();
    clearSavedState();
    showScreen('screen-mode');
  }

  // ============ Net handlers ============
  function attachNetHandlers() {
    Net.on('presence', ({ players: peers }) => {
      // peers: [{id, name, role, joinedAt}]
      // Build state.players from roles
      const host = peers.find((p) => p.role === 'host');
      const guest = peers.find((p) => p.role === 'guest');
      state.players[0].name = host ? host.name : (state.role === 'host' ? state.players[0].name : '?');
      state.players[1].name = guest ? guest.name : (state.role === 'guest' ? state.players[1].name : '');
      if ($('#screen-lobby').classList.contains('active')) {
        $('#lobby-p1-name').textContent = state.players[0].name || '…';
        $('#lobby-p2-name').textContent = state.players[1].name || 'Waiting…';
        $('#lobby-p1').classList.toggle('connected', !!host);
        $('#lobby-p2').classList.toggle('connected', !!guest);
        $('#lobby-p2').classList.toggle('waiting', !guest);
        updateLobbyStartButton();
      }
      // Opponent disconnect detection — only relevant once we're past the lobby
      if (state.mode !== 'online' || !state.role) {
        hideNetBanner();
        return;
      }
      const oppRole = state.role === 'host' ? 'guest' : 'host';
      const oppPresent = peers.some((p) => p.role === oppRole);
      const onLobby = $('#screen-lobby').classList.contains('active');
      const onMode = $('#screen-mode').classList.contains('active');
      const onOnline = $('#screen-online').classList.contains('active');
      if (!oppPresent && !onLobby && !onMode && !onOnline) {
        showNetBanner(`Opponent disconnected. Waiting for them to come back…`);
      } else {
        hideNetBanner();
      }
    });

    Net.on('player_left', () => {
      // Handled by presence event above
    });

    Net.on('start_round', (payload) => {
      // Guest receives this from host
      if (state.role === 'host') return;
      state.currentCategoryId = payload.categoryId;
      state.roundNumber = payload.roundNumber;
      state.secondsPerTurn = payload.secondsPerTurn;
      if (payload.targetScore !== undefined) state.targetScore = payload.targetScore;
      state.roundResults = [null, null];
      state.roundProgress = 'idle';
      saveState();
      showCategoryScreen();
    });

    Net.on('play_round', (payload) => {
      // Both players go to turn at the same startsAt
      state.roundStartsAt = payload.startsAt;
      saveState();
      startTurn();
    });

    Net.on('skip_category', () => {
      // Both refresh to a new category sent by host immediately after
    });

    Net.on('progress', (payload) => {
      // Opponent live progress
      opponentProgress = { foundCount: payload.foundCount, score: payload.score, done: false };
      renderOpponentBar();
      renderWaitingScreenProgress();
    });

    Net.on('turn_done', (payload) => {
      // Opponent finished their turn. Store their result.
      const oppIdx = state.role === 'host' ? 1 : 0;
      state.roundResults[oppIdx] = { matchedIndexes: payload.matchedIndexes || [], score: payload.score || 0 };
      opponentProgress = { foundCount: (payload.matchedIndexes || []).length, score: payload.score || 0, done: true };
      renderOpponentBar();
      renderWaitingScreenProgress();
      maybeShowResults();
    });

    Net.on('next_round', () => {
      // Host moves on; guest follows
      if (state.role === 'host') return;
      // Host will follow up with start_round
    });

    Net.on('end_game', (payload) => {
      if (payload && payload.history) state.history = payload.history;
      if (payload && payload.players) state.players = payload.players;
      showFinal();
    });

    Net.on('snapshot_request', () => {
      // Host responds with full state if a guest just joined
      if (state.role !== 'host') return;
      Net.send('snapshot', {
        roundNumber: state.roundNumber,
        playedIds: state.playedIds,
        history: state.history,
        players: state.players,
        currentCategoryId: state.currentCategoryId,
        secondsPerTurn: state.secondsPerTurn,
        targetScore: state.targetScore,
      });
    });

    Net.on('snapshot', (payload) => {
      if (state.role !== 'guest') return;
      state.roundNumber = payload.roundNumber || 1;
      state.playedIds = payload.playedIds || [];
      state.history = payload.history || [];
      state.players[0].total = (payload.players && payload.players[0]?.total) || 0;
      state.players[1].total = (payload.players && payload.players[1]?.total) || 0;
      state.players[0].name = (payload.players && payload.players[0]?.name) || state.players[0].name;
      state.players[1].name = (payload.players && payload.players[1]?.name) || state.players[1].name;
      state.secondsPerTurn = payload.secondsPerTurn || 60;
      if (payload.targetScore !== undefined) state.targetScore = payload.targetScore;
      saveState();
    });
  }

  function showNetBanner(msg) {
    const b = $('#net-banner');
    $('#net-banner-text').textContent = msg;
    b.hidden = false;
  }
  function hideNetBanner() { $('#net-banner').hidden = true; }

  // ============ Category screen ============
  function pickNextCategory() {
    const playedSet = new Set(state.playedIds);
    const remaining = CATEGORIES.filter((c) => !playedSet.has(c.id));
    if (remaining.length === 0) {
      state.playedIds = [];
      return pickRandom(CATEGORIES);
    }
    return pickRandom(remaining);
  }

  function nextCategory() {
    // Only host calls this in online mode; both call in local mode
    if (state.mode === 'online' && state.role !== 'host') return;
    const cat = pickNextCategory();
    state.currentCategoryId = cat.id;
    state.currentTurn = state.startingPlayer;
    state.roundProgress = 'idle';
    state.roundResults = [null, null];
    saveState();
    if (state.mode === 'online') {
      Net.send('start_round', {
        categoryId: cat.id,
        roundNumber: state.roundNumber,
        secondsPerTurn: state.secondsPerTurn,
        targetScore: state.targetScore,
      });
    }
    showCategoryScreen();
  }

  function getCategory() {
    return CATEGORIES.find((c) => c.id === state.currentCategoryId);
  }

  function showCategoryScreen() {
    const cat = getCategory();
    if (!cat) return;
    $('#round-num').textContent = String(state.roundNumber);
    $('#cat-tag').textContent = cat.category;
    $('#cat-prompt').textContent = cat.prompt;
    $('#cat-hint').textContent = cat.hint || '';
    renderScoreboard($('#cat-scoreboard'));
    if (state.mode === 'online') {
      const isHost = state.role === 'host';
      $('#cat-actions').hidden = !isHost;
      $('#cat-waiting').hidden = isHost;
      $('#btn-end-1').hidden = !isHost;
    } else {
      $('#cat-actions').hidden = false;
      $('#cat-waiting').hidden = true;
      $('#btn-end-1').hidden = false;
    }
    showScreen('screen-category');
  }

  function renderScoreboard(container) {
    const p1 = state.players[0];
    const p2 = state.players[1];
    const target = state.targetScore;
    const tgtSuffix = target ? `<div class="target-progress">/ ${target}</div>` : '';
    container.innerHTML = `
      <div class="score-cell p1">
        <div class="pname">${escapeHtml(p1.name || '…')}</div>
        <div class="ppts">${p1.total}</div>
        ${tgtSuffix}
      </div>
      <div class="divider"></div>
      <div class="score-cell p2">
        <div class="pname">${escapeHtml(p2.name || '…')}</div>
        <div class="ppts">${p2.total}</div>
        ${tgtSuffix}
      </div>
    `;
  }

  function initCategoryScreen() {
    $('#btn-skip').addEventListener('click', () => {
      // Skipping doesn't count as played in local mode
      if (state.mode === 'online') {
        Net.send('skip_category', {});
      }
      nextCategory();
    });
    $('#btn-play').addEventListener('click', () => {
      if (state.mode === 'local') {
        goToHandoff();
      } else if (state.role === 'host') {
        const startsAt = Date.now() + 1500;
        state.roundStartsAt = startsAt;
        Net.send('play_round', { startsAt });
        saveState();
        startTurn();
      }
    });
    $('#btn-end-1').addEventListener('click', () => endGame());
  }

  // ============ Handoff (local only) ============
  function goToHandoff() {
    if (state.mode !== 'local') return;
    $('#handoff-name').textContent = state.players[state.currentTurn].name;
    showScreen('screen-handoff');
  }
  function initHandoff() {
    $('#btn-ready').addEventListener('click', () => startTurn());
  }

  // ============ Turn ============
  function startTurn() {
    const cat = getCategory();
    if (!cat) return;
    currentMatchedIdx = new Set();
    currentScore = 0;
    myTurnSubmitted = false;
    opponentProgress = { foundCount: 0, score: 0, done: false };

    const whoseName = state.mode === 'local'
      ? state.players[state.currentTurn].name
      : state.players[state.me].name;
    $('#turn-name').textContent = whoseName;
    $('#turn-dot').style.background = (state.mode === 'local' ? state.currentTurn : state.me) === 0 ? '#ff6cab' : '#00d4ff';
    $('#turn-dot').style.boxShadow = `0 0 12px ${(state.mode === 'local' ? state.currentTurn : state.me) === 0 ? '#ff6cab' : '#00d4ff'}`;
    $('#turn-tag').textContent = cat.category;
    $('#turn-prompt-text').textContent = cat.prompt;
    $('#turn-hint').textContent = cat.hint || '';
    $('#turn-total').textContent = cat.items.length;
    $('#turn-found').textContent = '0';
    $('#turn-found-list').innerHTML = '';
    $('#turn-feedback').textContent = '';
    $('#turn-feedback').className = 'feedback';

    const input = $('#turn-input');
    input.value = '';
    input.disabled = false;
    setTimeout(() => input.focus(), 50);

    if (state.mode === 'online') {
      $('#opponent-bar').hidden = false;
      $('#opp-name').textContent = state.players[1 - state.me].name || 'Opponent';
      $('#opp-total').textContent = cat.items.length;
      renderOpponentBar();
    } else {
      $('#opponent-bar').hidden = true;
    }

    // Compute timer endpoint
    if (state.mode === 'online' && state.roundStartsAt) {
      // Wait until startsAt, then count down
      const now = Date.now();
      const delay = Math.max(0, state.roundStartsAt - now);
      if (delay > 0) {
        // Block input until start
        input.disabled = true;
        $('#turn-feedback').textContent = `Starting in ${Math.ceil(delay/1000)}…`;
        setTimeout(() => {
          input.disabled = false;
          input.focus();
          turnEndsAt = state.roundStartsAt + state.secondsPerTurn * 1000;
          $('#turn-feedback').textContent = 'GO!';
          $('#turn-feedback').className = 'feedback good';
          setTimeout(() => { $('#turn-feedback').textContent = ''; }, 700);
          if (timerInterval) clearInterval(timerInterval);
          updateTimer();
          timerInterval = setInterval(updateTimer, 200);
        }, delay);
      } else {
        turnEndsAt = state.roundStartsAt + state.secondsPerTurn * 1000;
        if (timerInterval) clearInterval(timerInterval);
        updateTimer();
        timerInterval = setInterval(updateTimer, 200);
      }
    } else {
      turnEndsAt = Date.now() + state.secondsPerTurn * 1000;
      if (timerInterval) clearInterval(timerInterval);
      updateTimer();
      timerInterval = setInterval(updateTimer, 200);
    }

    showScreen('screen-turn');
  }

  function renderOpponentBar() {
    if (state.mode !== 'online') return;
    if (!$('#screen-turn').classList.contains('active')) return;
    const cat = getCategory();
    if (!cat) return;
    $('#opp-found').textContent = opponentProgress.foundCount;
    $('#opp-total').textContent = cat.items.length;
    const statusEl = $('#opp-status');
    statusEl.textContent = opponentProgress.done ? 'done' : 'playing';
    statusEl.classList.toggle('done', opponentProgress.done);
  }

  function updateTimer() {
    const left = Math.max(0, Math.ceil((turnEndsAt - Date.now()) / 1000));
    const el = $('#turn-timer');
    el.textContent = String(left);
    el.classList.toggle('warn', left <= 15 && left > 5);
    el.classList.toggle('crit', left <= 5);
    if (left <= 0) finishTurn(true);
  }

  function finishTurn(timeUp = false) {
    if (myTurnSubmitted) return;
    myTurnSubmitted = true;
    if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }
    $('#turn-input').disabled = true;

    if (state.mode === 'local') {
      state.roundResults[state.currentTurn] = {
        matchedIndexes: Array.from(currentMatchedIdx),
        score: currentScore,
      };
      saveState();
      if (state.roundProgress === 'idle') {
        state.roundProgress = 'p0_done';
        state.currentTurn = 1 - state.currentTurn;
        saveState();
        goToHandoff();
      } else {
        state.roundProgress = 'both_done';
        saveState();
        showResults();
      }
      return;
    }

    // ONLINE: store my result, send turn_done, then either wait or show results
    const myIdx = state.me;
    state.roundResults[myIdx] = {
      matchedIndexes: Array.from(currentMatchedIdx),
      score: currentScore,
    };
    saveState();
    Net.send('turn_done', {
      matchedIndexes: Array.from(currentMatchedIdx),
      score: currentScore,
    });
    maybeShowResults();
  }

  function maybeShowResults() {
    if (state.mode !== 'online') return;
    if (state.roundResults[0] && state.roundResults[1]) {
      showResults();
    } else if (myTurnSubmitted) {
      showWaiting();
    }
  }

  function showWaiting() {
    const myScore = state.roundResults[state.me]?.score || 0;
    $('#waiting-my-score').textContent = myScore;
    $('#waiting-opp-name').textContent = state.players[1 - state.me].name || 'your opponent';
    renderWaitingScreenProgress();
    showScreen('screen-waiting');
  }

  function renderWaitingScreenProgress() {
    if (!$('#screen-waiting').classList.contains('active')) return;
    const cat = getCategory();
    if (!cat) return;
    const total = cat.items.length;
    const found = opponentProgress.foundCount;
    $('#waiting-opp-found').textContent = found;
    $('#waiting-opp-total').textContent = total;
    $('#waiting-opp-bar').style.width = `${Math.min(100, (found / total) * 100)}%`;
  }

  function handleAnswer(rawInput) {
    if (myTurnSubmitted) return;
    const inputVal = rawInput.trim();
    if (!inputVal) return;
    const cat = getCategory();
    const norm = normalize(inputVal);
    if (!norm) return;

    let matchedIdx = -1;
    for (let i = 0; i < cat.items.length; i++) {
      if (currentMatchedIdx.has(i)) continue;
      const item = cat.items[i];
      const candidates = [item.name, ...(item.aliases || [])];
      if (candidates.some((c) => normalize(c) === norm)) { matchedIdx = i; break; }
    }

    const inp = $('#turn-input');
    const fb = $('#turn-feedback');
    if (matchedIdx >= 0) {
      currentMatchedIdx.add(matchedIdx);
      const item = cat.items[matchedIdx];
      const pts = scoreFor(matchedIdx, cat.items.length);
      currentScore += pts;
      $('#turn-found').textContent = String(currentMatchedIdx.size);
      addFoundChip(matchedIdx + 1, item.name, pts);
      fb.textContent = `+${pts} — #${matchedIdx + 1}: ${item.name}`;
      fb.className = 'feedback good';
      inp.classList.remove('shake', 'flash-good');
      void inp.offsetWidth;
      inp.classList.add('flash-good');
      inp.value = '';

      if (state.mode === 'online') {
        Net.send('progress', { foundCount: currentMatchedIdx.size, score: currentScore });
      }

      if (currentMatchedIdx.size >= cat.items.length) {
        fb.textContent = `🎉 PERFECT! All ${cat.items.length} found!`;
        setTimeout(() => finishTurn(false), 1200);
      }
    } else {
      let alreadyHave = false;
      for (let i = 0; i < cat.items.length; i++) {
        if (!currentMatchedIdx.has(i)) continue;
        const item = cat.items[i];
        const candidates = [item.name, ...(item.aliases || [])];
        if (candidates.some((c) => normalize(c) === norm)) { alreadyHave = true; break; }
      }
      if (alreadyHave) {
        fb.textContent = 'Already got that one!';
        fb.className = 'feedback';
      } else {
        fb.textContent = `Nope — "${inputVal}" not in the list`;
        fb.className = 'feedback bad';
      }
      inp.classList.remove('flash-good', 'shake');
      void inp.offsetWidth;
      inp.classList.add('shake');
      inp.select();
    }
  }

  function scoreFor(idx, total) { return total - idx; }

  function addFoundChip(rank, name, pts) {
    const li = document.createElement('li');
    li.innerHTML = `<span class="rank-chip">#${rank}</span><span>${escapeHtml(name)}</span><span style="margin-left:auto;opacity:.7;font-size:.85rem">+${pts}</span>`;
    $('#turn-found-list').prepend(li);
  }

  function initTurnScreen() {
    $('#turn-form').addEventListener('submit', (e) => {
      e.preventDefault();
      handleAnswer($('#turn-input').value);
    });
    $('#btn-finish-turn').addEventListener('click', () => {
      if (confirm('End your turn now?')) finishTurn(false);
    });
  }

  // ============ Results ============
  function showResults() {
    const cat = getCategory();
    const [r0, r1] = state.roundResults;
    const s0 = r0 ? r0.score : 0;
    const s1 = r1 ? r1.score : 0;
    const p1 = state.players[0];
    const p2 = state.players[1];

    const winner = s0 > s1 ? 0 : s1 > s0 ? 1 : -1;

    $('#results-scores').innerHTML = `
      <div class="player-result ${winner === 0 ? 'winner' : ''}">
        <div class="pname">${escapeHtml(p1.name)}</div>
        <div class="ppts">+${s0}</div>
        <div class="psub">${r0 ? r0.matchedIndexes.length : 0} / ${cat.items.length} correct</div>
      </div>
      <div class="player-result ${winner === 1 ? 'winner' : ''}">
        <div class="pname">${escapeHtml(p2.name)}</div>
        <div class="ppts">+${s1}</div>
        <div class="psub">${r1 ? r1.matchedIndexes.length : 0} / ${cat.items.length} correct</div>
      </div>
    `;

    $('#results-prompt').textContent = cat.prompt;
    const list = $('#reveal-list');
    list.innerHTML = '';
    cat.items.forEach((item, i) => {
      const got0 = r0 && r0.matchedIndexes.includes(i);
      const got1 = r1 && r1.matchedIndexes.includes(i);
      let badge = '';
      if (got0 && got1) badge = `<span class="badge both">BOTH</span>`;
      else if (got0) badge = `<span class="badge p1">${escapeHtml(p1.name)}</span>`;
      else if (got1) badge = `<span class="badge p2">${escapeHtml(p2.name)}</span>`;
      const li = document.createElement('li');
      li.innerHTML = `<span class="rank">#${i + 1}</span><span class="name">${escapeHtml(item.name)}</span>${badge}<span style="font-size:.75rem;opacity:.5">+${scoreFor(i, cat.items.length)}</span>`;
      list.appendChild(li);
    });

    // Commit to totals + history (only once per round)
    if (!state._resultsCommitted) {
      p1.total += s0;
      p2.total += s1;
      state.history.push({
        categoryId: cat.id,
        prompt: cat.prompt,
        p1Score: s0,
        p2Score: s1,
      });
      state.playedIds.push(cat.id);
      state.roundNumber += 1;
      state.startingPlayer = 1 - state.startingPlayer;
      state.currentTurn = state.startingPlayer;
      state.roundProgress = 'idle';
      state.roundResults = [null, null];
      state._resultsCommitted = true;
      saveState();
    }

    renderScoreboard($('#results-scoreboard'));

    // Target-score check: did anyone reach it?
    const gameOver = !!state.targetScore && (p1.total >= state.targetScore || p2.total >= state.targetScore);
    const btnNext = $('#btn-next');
    btnNext.textContent = gameOver ? 'See final results →' : 'Next round →';
    btnNext.dataset.gameOver = gameOver ? '1' : '';

    if (state.mode === 'online') {
      const isHost = state.role === 'host';
      $('#results-actions').hidden = !isHost;
      $('#results-waiting').hidden = isHost;
      // Guest sees a different "waiting" message when the target was hit
      $('#results-waiting').textContent = gameOver ? 'Waiting for host to show final results…' : 'Waiting for host…';
    } else {
      $('#results-actions').hidden = false;
      $('#results-waiting').hidden = true;
    }
    showScreen('screen-results');
  }

  function initResultsScreen() {
    $('#btn-next').addEventListener('click', () => {
      const gameOver = $('#btn-next').dataset.gameOver === '1';
      delete state._resultsCommitted;
      saveState();
      if (gameOver) {
        endGame();
        return;
      }
      if (state.mode === 'online') Net.send('next_round', {});
      nextCategory();
    });
    $('#btn-end-2').addEventListener('click', () => endGame());
  }

  // ============ Endgame ============
  function endGame() {
    if (state.mode === 'online' && state.role === 'host') {
      Net.send('end_game', { history: state.history, players: state.players });
    }
    showFinal();
  }

  function showFinal() {
    const p1 = state.players[0];
    const p2 = state.players[1];
    const winner = p1.total > p2.total ? 0 : p2.total > p1.total ? 1 : -1;

    $('#winner-text').textContent =
      winner === -1
        ? `It's a tie! ${p1.total} – ${p2.total}`
        : `${state.players[winner].name} wins! 🎉`;

    $('#final-scores').innerHTML = `
      <div class="player-result ${winner === 0 ? 'winner' : ''}">
        <div class="pname">${escapeHtml(p1.name)}</div>
        <div class="ppts">${p1.total}</div>
        <div class="psub">total points</div>
      </div>
      <div class="player-result ${winner === 1 ? 'winner' : ''}">
        <div class="pname">${escapeHtml(p2.name)}</div>
        <div class="ppts">${p2.total}</div>
        <div class="psub">total points</div>
      </div>
    `;

    const hist = $('#final-history');
    if (state.history.length === 0) {
      hist.innerHTML = '<h4>No rounds played yet</h4>';
    } else {
      hist.innerHTML =
        `<h4>Round history (${state.history.length})</h4>` +
        state.history.map((h) => `
          <div class="history-row">
            <div>${escapeHtml(h.prompt)}</div>
            <div class="scores">
              <span class="p1-score">${h.p1Score}</span>
              <span style="opacity:.4"> – </span>
              <span class="p2-score">${h.p2Score}</span>
            </div>
          </div>
        `).join('');
    }

    if (winner !== -1) launchConfetti();
    showScreen('screen-final');
  }

  function initFinalScreen() {
    $('#btn-rematch').addEventListener('click', () => {
      const names = state.players.map((p) => p.name);
      const sec = state.secondsPerTurn;
      const tgt = state.targetScore;
      const mode = state.mode;
      const role = state.role;
      const me = state.me;
      state = defaultState();
      state.players[0].name = names[0];
      state.players[1].name = names[1];
      state.secondsPerTurn = sec;
      state.targetScore = tgt;
      state.mode = mode;
      state.role = role;
      state.me = me;
      saveState();
      if (mode === 'online' && role === 'host') {
        nextCategory();
      } else if (mode === 'online') {
        // Wait for host to start
        showScreen('screen-lobby');
      } else {
        nextCategory();
      }
    });
    $('#btn-new-game').addEventListener('click', () => {
      if (state.mode === 'online') Net.leave();
      clearSavedState();
      state = defaultState();
      $('#input-p1').value = '';
      $('#input-p2').value = '';
      $('#online-name').value = '';
      $('#online-code').value = '';
      $('#btn-resume').hidden = true;
      showScreen('screen-mode');
    });
    $('#net-banner-leave').addEventListener('click', () => {
      if (state.mode === 'online') Net.leave();
      hideNetBanner();
      state = defaultState();
      showScreen('screen-mode');
    });
  }

  // ============ Confetti ============
  function launchConfetti() {
    const canvas = $('#confetti');
    canvas.innerHTML = '';
    const colors = ['#ffd93d', '#ff6cab', '#00d4ff', '#6dffac', '#ff9b54', '#7873f5'];
    const N = 80;
    for (let i = 0; i < N; i++) {
      const piece = document.createElement('div');
      piece.className = 'confetti-piece';
      piece.style.left = `${Math.random() * 100}%`;
      piece.style.background = colors[Math.floor(Math.random() * colors.length)];
      piece.style.animationDuration = `${2 + Math.random() * 2}s`;
      piece.style.animationDelay = `${Math.random() * 0.6}s`;
      piece.style.transform = `rotate(${Math.random() * 360}deg)`;
      canvas.appendChild(piece);
    }
    setTimeout(() => { canvas.innerHTML = ''; }, 5000);
  }

  // ============ Boot ============
  function handleDeepLink() {
    const params = new URLSearchParams(location.search);
    if (params.get('room')) {
      state.mode = 'online';
      showOnlineEntry();
      return true;
    }
    return false;
  }

  function boot() {
    initModePicker();
    initLocalWelcome();
    initOnlineEntry();
    initLobby();
    initCategoryScreen();
    initHandoff();
    initTurnScreen();
    initResultsScreen();
    initFinalScreen();
    if (!handleDeepLink()) {
      showScreen('screen-mode');
    }
  }

  document.addEventListener('DOMContentLoaded', boot);
})();
