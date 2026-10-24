# Top 10 Showdown — how the game looks

A loud, friendly party-game look: frosted-glass cards over a dark navy
background lit by pink, violet, orange and cyan glows, with a chunky display
face for numbers and titles. It is built to be read from across a sofa and
played on a phone.

There is no design system yet: no tokens, no component folder. Everything is
in one stylesheet, and the values below are the ones the code uses today.
Reuse them; don't add near-misses.

| What | Where |
|---|---|
| Colours, type, radii, spacing | `styles.css` (literal values, no custom properties) |
| Fonts | Google Fonts `<link>` in `index.html` |
| Components | CSS classes in `styles.css`, markup in `index.html`, a few built in `app.js` |

## Principles

1. **Big and glanceable.** The timer, the scores and the category are the
   largest things on screen; a player mid-turn should never hunt for them.
2. **Player 1 is pink, player 2 is cyan**, everywhere: dots, badges, scores,
   history. Gold is the game's own colour (titles, ranks, focus, primary
   buttons).
3. **One column, centred, at most 760px wide.** Below 600px every grid stacks
   and action rows turn into full-width stacked buttons.

## Colour

Dark only. Text is white; secondary text is white at reduced opacity
(`.6`–`.8`) rather than a grey.

| Role | Value | Used for |
|---|---|---|
| Background base | `#1a1a2e` → `#16213e` | page gradient; also dark text on gold/green fills |
| Glow: pink | `#ff6cab` | background glow; **player 1** |
| Glow: cyan | `#00d4ff` | background glow; **player 2** |
| Glow: violet | `#7873f5` | background glow |
| Gold | `#ffd93d` (hover `#ffe566`) | titles, ranks, `.vs`, focus borders, primary/small buttons, pills |
| Orange | `#ff9b54`, shadow `#c47a1f` | primary button gradient end and its 3D edge; timer warning |
| Green | `#6dffac` | correct answer, found chips, "done", connected player |
| Red | `#ff5a5a`, soft `#ff8a8a`, `#ffb8b8` | timer critical, wrong answer, errors, disconnect banner |
| Glass | `rgba(255,255,255,.08)`–`.18`, border `.15`–`.2` | cards, inputs, ghost buttons |

## Type

| Face | Weights | Used for |
|---|---|---|
| **Bungee** | 400 | the title, timer, scores, ranks, room code, `VS` |
| **Fredoka** | 400–700 | everything else (body font, `system-ui` fallback) |
| `monospace` | — | the lobby link field and history scores |

Sizes are `rem`, with `clamp()` for the title (`2.2rem`–`3.6rem`, the "10" up
to `7rem`). Labels are `.85rem`, uppercase, `letter-spacing: .08em`, weight
600. Buttons are uppercase, weight 700.

## Shape and space

- **Radii in use:** `999px` (pills, chips, progress bars), `28px` (cards),
  `24px`, `20px`, `18px` (big buttons), `16px`, `14px` (inputs), `12px`,
  `10px`, `50%` (dots, spinner).
- **Spacing:** gaps of `6px`, `12px`, `18px`, `24px`; card padding
  `32px 28px`; page padding `32px 24px 80px` (`20px 16px 60px` on phones).
- **Depth:** `backdrop-filter: blur(20px)` on glass, soft drop shadows, and a
  solid `0 6px 0` bottom edge on the primary button that presses down on
  `:active`.
- **Motion:** screens fade up (`.35s`); the timer pulses when low; wrong
  answers shake; confetti on game over.

## Components

| Component | Use it for |
|---|---|
| `.screen` (+ `.active`) | one step of the game; exactly one is shown |
| `.hero`, `.title`, `.subtitle` | the top of a setup screen |
| `.card` | the glass panel that holds a form or content |
| `.field`, `.setting` | a labelled text input or `<select>` |
| `.big-btn.primary` / `.big-btn.ghost` | the main action / the alternative, side by side in `.actions` |
| `.link-btn` (`.danger`, `.back`) | quiet actions: back, resume, finish early, end game |
| `.small-btn` | inline actions such as "Copy link" |
| `.mode-card` | a large choice tile on the mode picker |
| `.round-pill`, `.category-card`, `.tag` | the round number and the category being played |
| `.turn-header`, `.turn-timer`, `.feedback`, `.found-list` | the turn: whose go, time left, last answer, found chips |
| `.opponent-bar`, `.opp-progress` | the other player's progress in an online round |
| `.scoreboard`, `.player-result`, `.reveal-list` (badges `.p1`/`.p2`) | round results and the full answer list |
| `.lobby-*`, `.code-input` | creating, sharing and joining a room |
| `.waiting-banner`, `.waiting-card`, `.spinner` | waiting on the host or the opponent |
| `.net-banner` | a fixed red banner when the connection or opponent drops |

## Voice

Short, playful and second person, like a friend running the game:
"Name the top 10. Beat your opponent. Argue later.", "Pass the keyboard",
"Other player — look away! 👀". Feedback says exactly what happened:
`+9 — #2: China`, `Already got that one!`, `Nope — "x" not in the list`.
Primary buttons are uppercase verbs (`START GAME`, `CREATE ROOM`); while busy
they say what's happening (`Creating…`, `Joining…`). Emoji are used sparingly,
as decoration, never as the only label.

## Accessibility

- White on the dark base and dark navy on gold pass contrast easily. White at
  `.6` opacity over the bright glows is the weakest pairing; don't go lower.
- Text inputs and the room code show focus with a gold border.
- See "Still to do" for the gaps.

## Design system artifact

**URL:** none yet. `/flow:sync-design-system` fills this in once there is one.

| Repo (source) | Artifact (copy) |
|---|---|
| `styles.css` | `project/tokens.json` |
| `index.html` / `styles.css` classes | `project/components/…` |
| this file | `project/README.md` |

## Still to do

- **No tokens.** Every colour, radius and size is a literal in `styles.css`,
  repeated (gold alone appears 23 times). Moving them to `:root` custom
  properties is the first step to a real system.
- **No focus style on buttons, selects or links.** `outline` is removed on
  inputs and selects, and nothing replaces it for keyboard users except on
  text inputs.
- **No `prefers-reduced-motion`.** The pulse, shake, fade and confetti always
  run.
- **Inline styles in `app.js`** (found-chip points, reveal-list points) bypass
  the stylesheet.
- **Emoji in the page title and headings** are read aloud by screen readers;
  there are no ARIA live regions for the timer or answer feedback.
- **Dark only.** There is no light theme and no toggle.
