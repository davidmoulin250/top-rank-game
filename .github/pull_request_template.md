## What changed for you

<!-- One or two plain sentences: what a player will notice. -->

## Why

<!-- The problem or the design this answers. Link the design handoff if there is one. -->

## Checklist

- [ ] Matches the design: compared side by side with the handoff, played locally (screens, desktop and phone width; an online room if rooms changed)
- [ ] Uses the colours, fonts and classes in DESIGN.md, or the new piece is added to DESIGN.md
- [ ] Syntax check passes (CI); a new shipped file has a `COPY` line in the `Dockerfile`
- [ ] Room messages: unchanged / changed and `PROTOCOL_VERSION` bumped
- [ ] Docs and AGENTS.md updated where behaviour, commands or traps changed
- [ ] Design-system artifact re-synced (only if the design changed)

## After deploy

<!-- Filled in by /flow:deploy. -->

- Deployed: <!-- image sha, time -->
- Smoke check: <!-- page and scripts return 200, running image, logs -->
