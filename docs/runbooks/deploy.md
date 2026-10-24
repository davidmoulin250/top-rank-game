# Deploy runbook — Top 10 Showdown

Used by `/flow:deploy` and `/flow:smoke-check`. Written from the infra repo's
service definition (`davidmoulin-infra/apps/top-rank-game.yml` and
`docker-compose.prod.yml`); the `ssh` commands have not been run from this
file yet. Fix this file whenever one fails as written.

## Where it runs

- **Host:** `ssh dm-prod-hetzner`, 178.156.198.233. Confirm with
  `dig +short top-rank-game.davidmoulin.com`, which must return that IP.
  `hostname` proves nothing.
- **Stack:** on the host, `cd ~/davidmoulin-infra`. Compose is
  `docker compose --env-file .env.prod -f docker-compose.prod.yml`, written
  `$DC` below. Every `ssh` call is a fresh shell, so define `DC` inside each
  remote command.
- **Service:** `top-rank-game-frontend`, one nginx container behind Traefik
  (router `top-rank-game`, port 80). Container:
  `davidmoulin-infra-top-rank-game-frontend-1`.
- **No database, no migration, no backup.** The app is static; game state is
  in players' browsers and rooms are Supabase broadcast channels.
- **Image:** `ghcr.io/davidmoulin250/top-rank-game`, public, tagged
  `sha-<7-char sha>` (and `latest`) by CI. Check a tag exists with
  `docker buildx imagetools inspect ghcr.io/davidmoulin250/top-rank-game:sha-<sha>`.
- **Pin a release** with `TOP_RANK_GAME_IMAGE=…`, which
  `apps/top-rank-game.yml` reads (default `:latest`).

## Steps

```bash
# Rollback point: what's running now
ssh dm-prod-hetzner 'docker inspect -f "{{.Config.Image}}" davidmoulin-infra-top-rank-game-frontend-1'

# Pull the pinned image
ssh dm-prod-hetzner 'cd ~/davidmoulin-infra && DC="docker compose --env-file .env.prod -f docker-compose.prod.yml" && export TOP_RANK_GAME_IMAGE=ghcr.io/davidmoulin250/top-rank-game:sha-<sha> && $DC pull top-rank-game-frontend'

# Release only this app (same cd, DC and export in the same call)
ssh dm-prod-hetzner 'cd ~/davidmoulin-infra && DC="docker compose --env-file .env.prod -f docker-compose.prod.yml" && export TOP_RANK_GAME_IMAGE=ghcr.io/davidmoulin250/top-rank-game:sha-<sha> && $DC up -d top-rank-game-frontend'
```

- Name only this service. The full stack's pull is all-or-nothing, and other
  apps' images can block it. A failed pull names one image and marks the rest
  `Interrupted`: read the last line.
- The pin lasts only for that shell. A later stack-wide `up -d` without
  `TOP_RANK_GAME_IMAGE` (in `.env.prod` or the environment) goes back to
  `:latest`, which CI also moves on every push to `main`.
- Rooms in progress survive a release (they live in Supabase), but players
  may hold the old JS for up to 5 minutes (`nginx.conf` caches JS and CSS).

## Smoke

- No health endpoint. The page is the check:
  `curl -sS https://top-rank-game.davidmoulin.com/ | grep -c 'Top 10 Showdown'`
  is at least 1, and
  `curl -sS -o /dev/null -w '%{http_code}' https://top-rank-game.davidmoulin.com/categories.js`
  (and `app.js`, `net.js`, `config.js`, `styles.css`) return `200`.
- Running image: the rollback-point command above prints the `sha-<sha>` tag,
  and `docker ps` shows the container `healthy`.
- Logs:
  `ssh dm-prod-hetzner 'docker logs --since 5m davidmoulin-infra-top-rank-game-frontend-1 2>&1' | grep -E '\[error\]|\[emerg\]| 5[0-9]{2} '`
  shows nothing new.
- Online rooms depend on the prod Supabase project; if creating a room fails,
  check that the project isn't paused in the Supabase dashboard.

## Rollback

Run "Release" with the rollback point's image. There is no data to restore.
