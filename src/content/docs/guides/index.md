---
title: Guides
description: Practical guides to install, onboard, configure, integrate and deploy the Blue Dots DPGs.
sidebar:
  order: 0
---

These guides take you from a clean machine to a running, integrated Blue Dots deployment.

## Installation

Stand up the stack locally, then each DPG:

- [Prerequisites](/bluedots-docs/guides/installation/prerequisites/) — tools and accounts you need.
- [Local Stack (Docker)](/bluedots-docs/guides/installation/local-stack/) — Postgres, Redis, Keycloak, Mailpit.
- [Signals DPG Setup](/bluedots-docs/guides/installation/signals-dpg/) — the network-aware backend + UI.
- [Aggregator DPG Setup](/bluedots-docs/guides/installation/aggregator-dpg/) — the onboarding app (API, web, worker).

## Build & integrate

- [Adaptor Onboarding](/bluedots-docs/guides/adaptor-onboarding/) — the end-to-end path for a new adaptor.
- [Configuration](/bluedots-docs/guides/configuration/) — env vars, config-as-code, per-environment overrides.
- [API Reference](/bluedots-docs/guides/api-reference/) — the Signals and Aggregator endpoints.
- [Deployment](/bluedots-docs/guides/deployment/) — moving from localhost to a VM or cloud.

:::tip[New adaptor?]
Start with [Adaptor Onboarding](/bluedots-docs/guides/adaptor-onboarding/) for the big picture, then drop into the installation guides for the step-by-step.
:::
