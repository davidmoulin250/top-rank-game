// Realtime wrapper for Top 10 Showdown.
// Supabase broadcast channel = one room.
// Player presence is tracked via broadcast hello / heartbeat messages so we don't depend on
// Supabase Presence (which can be finicky on free-tier / recently-restored projects).
(function () {
  const CODE_ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // no I/O/1/0
  const CODE_LENGTH = 4;
  const HEARTBEAT_MS = 4000;
  const STALE_MS = 12000;

  let supabase = null;
  let channel = null;
  let myPlayerId = null;
  let myName = null;
  let myRole = null;
  let roomCode = null;
  let heartbeatTimer = null;
  let staleSweepTimer = null;

  const listeners = {};
  const peers = new Map(); // id → { id, name, role, lastSeen }

  function loadSupabase() {
    if (window.supabase) return Promise.resolve(window.supabase);
    return new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/dist/umd/supabase.min.js';
      s.onload = () => resolve(window.supabase);
      s.onerror = () => reject(new Error('Failed to load Supabase client'));
      document.head.appendChild(s);
    });
  }

  async function ensureClient() {
    if (supabase) return supabase;
    const lib = await loadSupabase();
    supabase = lib.createClient(window.CONFIG.supabase.url, window.CONFIG.supabase.anonKey, {
      realtime: { params: { eventsPerSecond: 20 } },
    });
    return supabase;
  }

  function randomCode() {
    let out = '';
    const bytes = new Uint8Array(CODE_LENGTH);
    crypto.getRandomValues(bytes);
    for (let i = 0; i < CODE_LENGTH; i++) out += CODE_ALPHABET[bytes[i] % CODE_ALPHABET.length];
    return out;
  }

  function randomPlayerId() {
    const bytes = new Uint8Array(8);
    crypto.getRandomValues(bytes);
    return Array.from(bytes, (b) => b.toString(16).padStart(2, '0')).join('');
  }

  function emit(type, payload) {
    (listeners[type] || []).forEach((fn) => {
      try { fn(payload); } catch (e) { console.error('listener error', type, e); }
    });
  }
  function on(type, fn) {
    if (!listeners[type]) listeners[type] = [];
    listeners[type].push(fn);
    return () => off(type, fn);
  }
  function off(type, fn) {
    listeners[type] = (listeners[type] || []).filter((x) => x !== fn);
  }

  function rawSend(type, payload, extra) {
    if (!channel) return;
    channel.send({
      type: 'broadcast',
      event: 'msg',
      payload: { v: window.CONFIG.PROTOCOL_VERSION, type, from: myPlayerId, payload: payload || {}, ...(extra || {}) },
    });
  }

  function send(type, payload) {
    rawSend(type, payload);
  }

  function emitPresence() {
    const players = Array.from(peers.values())
      .filter((p) => p.id !== myPlayerId || true) // include self too
      .map((p) => ({ id: p.id, name: p.name, role: p.role, joinedAt: p.joinedAt }))
      .sort((a, b) => a.joinedAt - b.joinedAt);
    emit('presence', { players });
  }

  function upsertPeer(id, name, role, joinedAt) {
    const now = Date.now();
    const existing = peers.get(id);
    const joined = joinedAt || (existing && existing.joinedAt) || now;
    peers.set(id, { id, name, role, joinedAt: joined, lastSeen: now });
    if (!existing) emit('player_joined', { id, name, role });
    emitPresence();
  }

  function removePeer(id, reason) {
    const p = peers.get(id);
    if (!p) return;
    peers.delete(id);
    emit('player_left', { id, name: p.name, role: p.role, reason });
    emitPresence();
  }

  function sweepStale() {
    const now = Date.now();
    for (const [id, p] of peers.entries()) {
      if (id === myPlayerId) continue;
      if (now - p.lastSeen > STALE_MS) removePeer(id, 'timeout');
    }
  }

  function startHeartbeat() {
    stopHeartbeat();
    heartbeatTimer = setInterval(() => {
      rawSend('hb', { name: myName, role: myRole, joinedAt: peers.get(myPlayerId)?.joinedAt || Date.now() });
    }, HEARTBEAT_MS);
    staleSweepTimer = setInterval(sweepStale, 3000);
  }
  function stopHeartbeat() {
    if (heartbeatTimer) { clearInterval(heartbeatTimer); heartbeatTimer = null; }
    if (staleSweepTimer) { clearInterval(staleSweepTimer); staleSweepTimer = null; }
  }

  async function joinChannel(code, role, name) {
    await ensureClient();
    roomCode = code.toUpperCase();
    myRole = role;
    myName = name;
    myPlayerId = myPlayerId || randomPlayerId();

    if (channel) { try { await supabase.removeChannel(channel); } catch {} channel = null; }
    peers.clear();
    upsertPeer(myPlayerId, myName, myRole, Date.now());

    channel = supabase.channel(`room:${roomCode}`, {
      config: { broadcast: { self: false, ack: false } },
    });

    channel.on('broadcast', { event: 'msg' }, ({ payload }) => {
      if (!payload || payload.v !== window.CONFIG.PROTOCOL_VERSION) return;
      const from = payload.from;
      if (from === myPlayerId) return;
      // Mirror peer presence from any incoming message
      if (payload.type === 'hello' || payload.type === 'hb') {
        upsertPeer(from, payload.payload.name, payload.payload.role, payload.payload.joinedAt);
      } else if (payload.type === 'bye') {
        removePeer(from, 'left');
      } else {
        // Any other message also bumps lastSeen
        const p = peers.get(from);
        if (p) { p.lastSeen = Date.now(); }
      }
      // Forward to app
      if (payload.type === 'hello') {
        // Reply with our own hello so the new joiner can see us
        rawSend('hb', { name: myName, role: myRole, joinedAt: peers.get(myPlayerId)?.joinedAt || Date.now() });
      }
      emit(payload.type, { ...payload.payload, _from: from });
    });

    return new Promise((resolve, reject) => {
      let resolved = false;
      const timeout = setTimeout(() => {
        if (!resolved) { resolved = true; reject(new Error('Could not connect to room (timeout)')); }
      }, 8000);

      channel.subscribe(async (status) => {
        if (status === 'SUBSCRIBED') {
          clearTimeout(timeout);
          if (!resolved) {
            resolved = true;
            // Announce ourselves
            rawSend('hello', { name: myName, role: myRole, joinedAt: peers.get(myPlayerId).joinedAt });
            startHeartbeat();
            // Initial presence emit so UI shows me
            emitPresence();
            resolve({ playerId: myPlayerId, roomCode });
          }
        } else if (status === 'CHANNEL_ERROR' || status === 'TIMED_OUT') {
          if (!resolved) {
            clearTimeout(timeout);
            resolved = true;
            reject(new Error('Realtime error: ' + status));
          }
        }
      });
    });
  }

  async function createRoom(name) {
    const code = randomCode();
    await joinChannel(code, 'host', name);
    return { code, playerId: myPlayerId };
  }

  async function joinRoom(code, name) {
    return joinChannel(code, 'guest', name);
  }

  async function leave() {
    if (channel) {
      try { rawSend('bye', {}); } catch {}
      try { await supabase.removeChannel(channel); } catch {}
      channel = null;
    }
    stopHeartbeat();
    roomCode = null;
    myRole = null;
    peers.clear();
    Object.keys(listeners).forEach((k) => delete listeners[k]);
  }

  function getState() {
    return {
      connected: !!channel,
      roomCode,
      role: myRole,
      playerId: myPlayerId,
      name: myName,
    };
  }

  function _debug() { return { channel, supabase, myPlayerId, myRole, roomCode, listeners, peers }; }

  window.Net = { createRoom, joinRoom, leave, send, on, off, getState, ensureClient, _debug };
})();
