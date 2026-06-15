---
title: Local Stack (Docker)
description: Bring up Postgres, Redis, Keycloak and Mailpit for local development.
sidebar:
  order: 2
---

Both DPGs depend on backing services you run locally via Docker Compose. The two DPGs use slightly different sets.

## Signals backing services

Signals needs **Postgres + Redis**:

```bash
docker compose up -d db redis
```

To run the Signals API itself in a container against those services:

```bash
DOCKER_NETWORK=dpg_internal pnpm docker:api
```

## Aggregator backing services

The Aggregator stack brings up **Postgres, Keycloak, Redis and Mailpit**. Default local ports:

| Service | Port |
| --- | --- |
| PostgreSQL | 5433 |
| Keycloak | 8080 |
| Redis | 6379 |
| Mailpit (email UI) | 8025 |

One-shot setup and start:

```bash
make setup   # copies infra/env.template -> .env (chmod 600); adds 127.0.0.1 keycloak to /etc/hosts
make up      # docker compose up -d --build (everything containerised)
```

Useful lifecycle commands:

```bash
make down    # stop containers (volumes preserved)
make reset   # docker compose down -v — DESTROYS data volumes
make psql    # psql into local Postgres
```

:::caution
`make reset` removes data volumes permanently. Use it only when you intend to wipe local data.
:::

## Run modes

- **Hybrid (dev)** — backing services in Docker, apps run on the host with `pnpm --filter ... dev`. Uses per-app `.env` (copy from `.env.example`).
- **Docker-only (VM / prod-like)** — `make setup && make up`. All env values live in a single root `.env`, sectioned per service (`infra/env.template` is the canonical layout).

Next: set up each DPG — [Signals](/bluedots-docs/guides/installation/signals-dpg/) and [Aggregator](/bluedots-docs/guides/installation/aggregator-dpg/).
