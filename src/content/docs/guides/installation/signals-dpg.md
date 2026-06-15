---
title: Signals DPG Setup
description: Install, migrate and run the network-aware Signals backend and UI.
sidebar:
  order: 3
---

Set up the Signals DPG after your [backing services](/bluedots-docs/guides/installation/local-stack/) are running.

## 1. Install dependencies

```bash
pnpm install
```

## 2. Configure environment

Copy the example env and fill in values. **All env vars are declared in `packages/config`** — add new ones there (and to `turbo.json`'s `globalPassThroughEnv`), never ad hoc.

```bash
cp .env.example .env
```

Root scripts wrap Turbo via `scripts/turbo-with-root-env.mjs` so the root `.env` reaches filtered packages. Use the `pnpm dev:api` / `pnpm build:api` aliases — running `turbo run dev --filter=api` directly will miss env vars.

## 3. Database

DB schema lives in `apps/api/db/postgres/schema/`. **Never hand-edit migrations** — generate them:

```bash
pnpm db:generate:api      # generate migration after editing schema
# apply migrations per your environment's migrate step
```

You can bundle and verify the Helm-bundled schema:

```bash
pnpm schema:bundle
pnpm schema:bundle:check
```

## 4. Run

```bash
pnpm dev:api      # Fastify Signals API
# the React 19 + Vite UI runs from apps/ui
```

## 5. Tests & typecheck

```bash
pnpm --filter api test            # unit (excludes *.integration.test.ts)
pnpm --filter api test:watch

docker compose up -d db redis     # integration deps
pnpm --filter api test:integration

pnpm typecheck                    # api tsc + ui tsc
```

## 6. Seeding networks & domains

Define the **network** (`network.json`) and the **domains** your instance serves (`SERVED_DOMAINS`). Because the model is [schema-driven](/bluedots-docs/core-concepts/technical/schema-driven-model/), you add item types and forms through schemas rather than code.

:::tip
`AUTH_MIDDLEWARE_ENABLED=false` temporarily disables the auth path for running migrations or seed scripts. Re-enable it before serving traffic.
:::

Continue to the [Aggregator DPG Setup](/bluedots-docs/guides/installation/aggregator-dpg/), or wire your integration via [API Reference](/bluedots-docs/guides/api-reference/).
