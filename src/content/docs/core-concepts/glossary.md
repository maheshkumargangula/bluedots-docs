---
title: Glossary
description: Precise definitions of the Blue Dots vocabulary, used identically in product, docs and code.
sidebar:
  order: 5
---

The vocabulary below is used consistently across the product, this documentation and the code. Definitions are deliberately precise.

## Domain model

**Blue Dot / Signal**
: A local signal of intent from a citizen or enterprise, around livelihoods and services. Stored as an item.

**Network**
: The shared contract that lets independent instances interoperate (e.g. `blue_dot`, `yellow_dot`). Defined by a `network.json` schema.

**Domain**
: A role inside a network (e.g. `student`). An instance serves one or more domains via `SERVED_DOMAINS`.

**Instance**
: One deployment of the Signals API serving its configured domains.

**Item**
: A versioned, schema-typed record. `item_type` is a schema identifier such as `profile_1.0`, never freeform.

**Action**
: An interaction between items.

**Event**
: The structured result of an action.

**Seeker / Provider**
: The demand side and supply side of a signal — e.g. a jobseeker (seeker) and a local employer (provider).

## Platform

**Signals DPG**
: The network-aware backend that stores items and matches them across instances.

**Aggregator DPG**
: The aggregator-facing application for onboarding participants and bulk-creating their signals.

**Aggregator**
: An organisation (institute, employer, NGO, government department) that onboards participants. Scoped by `aggregator_id`, which is never trusted from the client.

**Adaptor**
: An organisation deploying and extending the Blue Dots DPGs for a district or domain.

## Technical

**`item_type`**
: Schema identifier for an item (e.g. `profile_1.0`).

**`item_instance_url` / `item_schema_url`**
: Backend-generated URLs for an item's location and schema. Never set by clients.

**Instance-local fetch**
: `GET /api/v1/item/fetch` — reads "my own items" with a brief cache.

**Inter-instance fetch**
: `GET /api/v1/network/item/fetch` — count-first discovery across peers, merged and cached.

**Two-header service auth**
: The `x-api-key` + acting-org header model used by integrating DPGs to call Signals.
