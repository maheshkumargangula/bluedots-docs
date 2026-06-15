---
title: Adaptor Onboarding
description: The end-to-end path for an adaptor to stand up Blue Dots for a district or domain.
sidebar:
  order: 5
---

This is the recommended path for a new **adaptor** — an organisation deploying Blue Dots for a district, state or domain. It assumes you have read [Blue Dots as a DPG](/bluedots-docs/overview/blue-dots-as-a-dpg/).

## The path at a glance

```text
1. Stand up Signals  ─▶  2. Define network + domains  ─▶  3. Add Aggregator
        ─▶  4. Add capture channels  ─▶  5. Integrate notifications  ─▶  6. Pilot & measure
```

## Step 1 — Stand up Signals

Start with the network-aware backend. Follow [Signals DPG Setup](/bluedots-docs/guides/installation/signals-dpg/). At the end you should have the Signals API and UI running against local Postgres + Redis.

## Step 2 — Define your network and domains

Decide the **network** you participate in (e.g. `blue_dot`) and the **domains** your instance serves (e.g. `student`, `employer`). Because the model is [schema-driven](/bluedots-docs/core-concepts/technical/schema-driven-model/), you express these as schemas and `SERVED_DOMAINS` config, not code. Define your item types (e.g. `profile_1.0`) up front.

## Step 3 — Add the Aggregator DPG

When you are ready to onboard partner organisations at scale, add the [Aggregator DPG](/bluedots-docs/guides/installation/aggregator-dpg/). Configure it to write participant signals into your Signals instance through the bulk-create paths, authenticating with the [two-header service-auth model](/bluedots-docs/core-concepts/architecture/identity-and-auth/):

```http
x-api-key: <your aggregator's API key>
x-acting-org-id: <the organisation you act as>
```

## Step 4 — Add capture channels

- **Web** — the schema-driven Signals UI and the Aggregator portal.
- **Voice AI** — for low-cost, local-language signal capture. A voice DPG integrates the same way an aggregator does (service-auth + bulk create).

## Step 5 — Integrate notifications

Wire **SMTP** (email) and an **SMS** provider for OTP, confirmations and match notifications. Mailpit covers email locally.

## Step 6 — Pilot and measure

Run a bounded pilot in one district (as Ghaziabad and Dharwad did) and track the before/after metrics that matter: jobs surfaced, discovery time, cost per interaction, and conversion. See [Pilots](/bluedots-docs/explore/pilots/).

## Onboarding checklist

- [ ] Signals API + UI running, migrations applied.
- [ ] Network schema and `SERVED_DOMAINS` defined; item types registered.
- [ ] Aggregator DPG deployed; Keycloak protocol mappers added.
- [ ] Service-auth API key issued and acting-org configured.
- [ ] SMTP + SMS providers connected.
- [ ] S3 bucket + credentials provisioned for bulk upload.
- [ ] Pilot scope and impact metrics agreed.
