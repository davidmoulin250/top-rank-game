# Top 10 Showdown — rules for coding agents

Top 10 Showdown (repo `top-rank-game`) is a two-player party game: each round
shows a category ("Most populous countries"), and each player types as many
of its top 10 as they can before the timer runs out. Higher ranks score more.
Players share one screen, or play an online room joined with a 4-character
code. It is plain HTML, CSS and JavaScript with no build step and no
dependencies, served by nginx; online rooms sync through Supabase Realtime
broadcast channels, and nothing is stored server-side.

Design rules live in [DESIGN.md](DESIGN.md). Read it before touching anything
a user sees.

## Map

| Path | What it is |
|---|---|
| `index.html` | Every screen of the game, one `<section class="screen">` each; scripts load at the end in order |
| `app.js` | Game state, screens, timer, answer matching and scoring; saves the game to `localStorage` |
| `net.js` | Online rooms: Supabase broadcast channel per room code, hello/heartbeat presence |
| `config.js` | Supabase URL and anon key per environment, chosen by hostname |
| `categories.js` | `window.CATEGORIES`: about 1,100 categories; the order of `items` is the ranking, and `aliases` are accepted spellings |
| `styles.css` | All styling (see DESIGN.md) |
| `favicon.svg` | The trophy icon |
| `Dockerfile`, `nginx.conf` | The production image: `nginx:alpine` serving the files above |
| `.github/workflows/build-and-push.yml` | CI: checks, then the image `ghcr.io/davidmoulin250/top-rank-game` |

## Commands

```bash
python3 -m http.server 8080                 # play locally at http://localhost:8080 (uses the dev Supabase project)
for f in *.js; do node --check "$f"; done   # syntax check; categories.js is 16k hand-edited lines
```

There is no test suite, linter or build. Before saying a change is done, the
syntax check passes, and any UI change has been played through locally in a
browser at desktop and phone width (`/flow:verify-design`), including an
online room if `net.js` or the round flow changed (open the room link in a
second window).

## Product rules

- **No accounts and no stored data.** Rooms live only in a Supabase broadcast
  channel; a game in progress lives only in the player's `localStorage`.
- **The order of `items` is the ranking.** Index 0 is #1, and scoring
  (`scoreFor`) depends on it. Add accepted spellings to `aliases`, never by
  reordering.
- **Both players must run the same protocol.** A change to the messages in
  `net.js` bumps `PROTOCOL_VERSION` in `config.js`.

## Code rules

- Match the code around you: vanilla JS inside an IIFE, `$`/`$$` helpers,
  `escapeHtml` on anything a player typed or a category supplies before it
  goes into `innerHTML`. Comments explain why, not what.
- Delete dead code; git is the archive.
- No framework, bundler or npm dependency without a reason the browser can't
  cover. The Supabase client loads from jsDelivr at a pinned version.
- A new file that ships needs a `COPY` line in the `Dockerfile`, which lists
  files one by one.

## Workflow

Every change follows the shared loop from the `flow` plugin
([davidmoulin250/claude-workflow](https://github.com/davidmoulin250/claude-workflow)).
`.claude/settings.json` enables it here, so a session in this repo offers to
install it. The process lives there; this repo holds the facts below.

1. **Design**, when there is one, in Claude Design.
2. **`/flow:implement-design`** builds the handoff to DESIGN.md, then
   **`/flow:verify-design`** compares it side by side with the handoff,
   locally, before anything ships.
3. **`/flow:ship`** commits with the change's checklist at the end of the
   message and pushes to `main` (Ship mode below). CI runs the checks on the
   push, and builds an image tagged `sha-<commit>` only if they pass.
4. **`/flow:deploy`**, only when asked: release pinned to the commit, then
   **`/flow:smoke-check`**.
5. **Learn.** A design-system change runs `/flow:sync-design-system`. A
   lesson that cost time goes into "Traps" below, in the same commit or the
   next one.

## Workflow facts

- **Design rules:** [DESIGN.md](DESIGN.md). **Design-system artifact:** none yet.
- **Design source:** none yet. Handoffs, when there are some, arrive as
  exported zips from Claude Design.
- **Local demo data:** none needed. `python3 -m http.server 8080` and open
  http://localhost:8080; `config.js` points localhost at the dev Supabase
  project, so online rooms work without touching production. For a room,
  create it in one window and open its `?room=<CODE>` link in another.
- **Themes:** one, dark. There is no toggle and no theme storage key.
- **Pages to check:** one URL, many screens: the mode picker; same-screen
  setup, category, handoff, turn, round results and game over; online entry,
  lobby, turn, waiting and results; and `/?room=<CODE>`. Check at 760px and
  above, and below 600px, where the grids stack.
- **Ship mode:** `direct`. David is the only one working here, so changes go
  straight to `main`, and CI's `checks` job still gates the image build.
  Switch to `pr` when someone joins.
- **Deploy runbook:** [docs/runbooks/deploy.md](docs/runbooks/deploy.md).
- **Production:** https://top-rank-game.davidmoulin.com/ (no health endpoint;
  the page itself is the check).

## Commits

Conventional commits scoped by what a user would recognise (`feat(rooms):`,
`data(categories):`), with a subject that says what changed for the player.
The body says why and ends with the change's checklist (`Checked:`, see
`/flow:ship`). Changes are pushed to `main`; never build or push images by
hand. CI builds them after the push, and if it goes red, fix it forward.

## Traps that have already cost time

- **The `Dockerfile` copies files by name.** A new script or asset that isn't
  added there works locally and 404s in production.
- **Supabase is chosen by hostname** (`config.js`): only `localhost`,
  `127.0.0.1`, `*.local` and `file://` use the dev project. Everything else,
  staging (`top-rank-game.staging.davidmoulin.com`) included, uses prod.
- **JS and CSS are cached for 5 minutes and the script tags have no version.**
  Right after a deploy a player can get new HTML with old scripts, and two
  players in a room can briefly run different code. Bump `PROTOCOL_VERSION`
  when the room messages change.
- **Not every category has 10 items.** A few have 3 to 8; the game scores by
  `items.length`, so this works, but don't assume 10.
- **CI skips pushes that touch only Markdown or `.claude/`** (`paths-ignore`),
  so a docs-only commit runs no checks and makes no image. That's intended.
