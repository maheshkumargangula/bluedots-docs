---
title: Blue Dots as a DPG
description: Why Blue Dots is built as open Digital Public Goods, and the two DPGs that make up the stack.
sidebar:
  order: 4
---

Blue Dots is built as **Digital Public Goods (DPGs)** — open-source, standards-based, reusable building blocks that any organisation can deploy, operate and extend. This design choice is deliberate: local discovery is a shared-infrastructure problem, and shared infrastructure is best built as a commons rather than a single closed platform.

## What "DPG" means here

A DPG in the Blue Dots sense is:

- **Open** — source-available and free to deploy. Adaptors run their own instances.
- **Network-aware** — instances interoperate on a shared contract (a *network*) instead of in silos.
- **Schema-driven** — what an instance stores and exchanges is defined by versioned schemas, not hardcoded, so domains can evolve without forking the code.
- **Composable** — an adaptor can serve one domain or many, and integrate with other DPGs.

## The two DPGs

The Blue Dots stack is anchored by two DPGs that work together:

### Signals DPG

The **network-aware backend** that stores Blue Dots and matches them across instances. Its core vocabulary — *network*, *domain*, *instance*, *item*, *action*, *event* — is used consistently in both the product and the code. Signals exposes the read/write APIs that everything else builds on. Most adaptors **start here**.

See [Core Concepts → Signals](/bluedots-docs/core-concepts/signals/) and [Architecture → Signals DPG](/bluedots-docs/core-concepts/architecture/signals-dpg/).

### Aggregator DPG

The **aggregator-facing application** that lets organisations onboard participants and bring their signals into the network at scale — through registration flows, approval, bulk upload and profile management. The Aggregator app reads from the upstream Signals stack and writes participant signals into it.

See [Core Concepts → Aggregators](/bluedots-docs/core-concepts/aggregators/) and [Architecture → Aggregator DPG](/bluedots-docs/core-concepts/architecture/aggregator-dpg/).

## How adaptors start

A typical adoption path:

1. Stand up a **Signals DPG** instance for your district or domain.
2. Define or adopt the **network** and **domain** schemas you need.
3. Add the **Aggregator DPG** to onboard partner organisations and bulk-load participants.
4. Layer in capture channels (web, voice) and integrations (SMS, email).

The [Adaptor Onboarding guide](/bluedots-docs/guides/adaptor-onboarding/) walks through this end to end.
