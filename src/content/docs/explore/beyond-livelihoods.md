---
title: Beyond Livelihoods
description: How the same discovery rails extend across sectors, and what it takes to add one.
sidebar:
  order: 3
---

Blue Dots starts with livelihoods for youth, but the discovery infrastructure is **sector-agnostic**. The same signal → discover → match → event pattern applies anywhere proximity and invisibility coexist.

## Sectors on the same rails

- **Skilling & education** — connecting learners with nearby training and apprenticeships.
- **Government schemes** — making entitlements discoverable to eligible citizens, lifting budget utilisation.
- **Local services** — linking citizens to nearby services they don't know exist.
- **Enterprise & MSME support** — surfacing local suppliers, buyers and talent.

Each is just another **domain** within a network, with its own item schemas.

## What it takes to add a sector

Because Blue Dots is [schema-driven](/bluedots-docs/core-concepts/technical/schema-driven-model/), extending to a new sector is primarily a **modelling** exercise, not a rebuild:

1. Define the **domain(s)** for the sector (the seeker and provider roles).
2. Define the **item schemas** (e.g. a service-offer type, an eligibility-profile type).
3. Configure the instance's `SERVED_DOMAINS`.
4. Add capture channels and any sector-specific notifications.
5. Pilot and measure.

The discovery problem is shared across sectors; solving it once, as a DPG, lets every sector reuse the same rails.
