---
title: Aggregator DPG Setup
description: Install, migrate and run the Aggregator API, web portal and worker.
sidebar:
  order: 4
---

Set up the Aggregator DPG after [backing services](/bluedots-docs/guides/installation/local-stack/) are running. It has three deployable apps: **api**, **web** and **worker**.

## 1. Install

```bash
pnpm install
```

## 2. Bring up the stack

```bash
make setup    # copies infra/env.template -> .env, adds keycloak host entry
make up       # docker compose up -d --build
```

## 3. Database (Drizzle)

```bash
pnpm --filter @aggregator-dpg/api db:generate   # new migration after schema edits
pnpm --filter @aggregator-dpg/api db:migrate    # apply migrations
pnpm --filter @aggregator-dpg/api db:studio     # Drizzle Studio
```

## 4. Keycloak protocol mappers (required)

After a fresh realm import, **manually add two protocol mappers** to the `aggregator` realm — mapping the `aggregator_id` and `phone_number` user attributes to token claims. Without them, the profile endpoint returns `403 MISSING_AGGREGATOR_ID`.

If you rebuild the OTP SPI or change Keycloak config:

```bash
make rebuild-keycloak    # rebuild OTP SPI jar + restart Keycloak
```

## 5. Run the apps (hybrid dev)

```bash
pnpm --filter @aggregator-dpg/api dev      # Fastify API on :4000
pnpm --filter @aggregator-dpg/web dev      # Next.js portal + BFF on :3000
pnpm --filter @aggregator-dpg/worker dev   # BullMQ worker
```

After a `NEXT_PUBLIC_*` change, rebuild the web image (the value is baked at compile time):

```bash
make rebuild-web
```

## 6. Quality gates

```bash
pnpm -w lint
pnpm -w typecheck
pnpm -w test          # vitest, ≥ 70% line target
pnpm dep-check        # dependency-cruiser boundary rules (required in CI)
```

:::note
Commits run husky/lint-staged and require **Conventional Commits**. Do not bypass with `--no-verify`.
:::

Continue to [Configuration](/bluedots-docs/guides/configuration/) or the [Adaptor Onboarding](/bluedots-docs/guides/adaptor-onboarding/) walkthrough.
