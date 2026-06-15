---
title: Core Concepts
description: The mental model, vocabulary, architecture and technical foundations of the Blue Dots DPGs.
sidebar:
  order: 0
---

This section explains how Blue Dots works underneath the product narrative. It is organised into three layers:

1. **Concepts** — the vocabulary and the two DPGs: [Signals](/bluedots-docs/core-concepts/signals/), [Aggregators](/bluedots-docs/core-concepts/aggregators/), [Networks, Domains & Instances](/bluedots-docs/core-concepts/networks-domains-instances/), and [Items, Actions & Events](/bluedots-docs/core-concepts/items-actions-events/).
2. **Architecture** — how the system is put together: [High-Level Architecture](/bluedots-docs/core-concepts/architecture/high-level-architecture/), the [Signals DPG](/bluedots-docs/core-concepts/architecture/signals-dpg/) and [Aggregator DPG](/bluedots-docs/core-concepts/architecture/aggregator-dpg/), the [Data Model](/bluedots-docs/core-concepts/architecture/data-model/), and [Identity & Auth](/bluedots-docs/core-concepts/architecture/identity-and-auth/).
3. **Technical Documentation** — implementation detail: the [Schema-Driven Model](/bluedots-docs/core-concepts/technical/schema-driven-model/), [Read & Write Paths](/bluedots-docs/core-concepts/technical/read-write-paths/), and the [Tech Stack](/bluedots-docs/core-concepts/technical/tech-stack/).

## The mental model in one paragraph

A Blue Dots deployment is **network-aware**. A *network* is a shared contract (for example `blue_dot`) defined by a schema. A *domain* is a role inside that network (for example `student`). An *instance* is one running deployment of the Signals API serving one or more domains. Inside an instance, every record is an *item* — a versioned, schema-typed object such as `profile_1.0`. Interactions between items are *actions*, and their structured results are *events*. The Aggregator DPG sits on top of this, helping organisations create items (signals) on behalf of the participants they onboard.

If you only remember one thing: **the vocabulary is precise and is used identically in the product, the docs and the code.** Learning it once pays off everywhere.
