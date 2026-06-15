---
title: The Blue Dots Approach
description: The four reinforcing levers behind Blue Dots, and how signals turn into local matches.
sidebar:
  order: 3
---

Blue Dots delivers discovery infrastructure through **four reinforcing levers**. Each strengthens the others, so the system compounds as adoption grows.

## The four reinforcing levers

1. **Signals of intent** — Citizens and enterprises publish *Blue Dots*: lightweight, structured expressions of what they are looking for or offering, around livelihoods and services. A Blue Dot is created in about two minutes.

2. **Voice-AI capture** — Signals are captured in the languages people actually speak, by voice where needed. This drops the cost of surfacing local intelligence from roughly ₹500 per traditional field survey to about ₹10 per interaction, and reaches users who would never fill out a form.

3. **Local matching** — The network discovers and matches relevant signals across nearby instances. A jobseeker and an employer two bus stops apart are connected in under a day instead of weeks — keeping income and spending inside the district (the "local multiplier").

4. **Aggregator-led onboarding** — Aggregators (training institutes, employers, NGOs, government departments) bring participants onto the network in bulk through the Aggregator DPG, so signal volume grows quickly without every citizen having to self-onboard.

## From signal to match

At a high level, the lifecycle of a Blue Dot is:

1. A **seeker** or **provider** creates a signal (directly, by voice, or via an aggregator).
2. The signal is stored as a schema-typed **item** in a **Signals DPG** instance.
3. The network performs **discovery** across relevant peer instances and surfaces candidate matches.
4. An **action** between two items produces a structured **event** (e.g. an interest, a connection, a placement).
5. Outcomes feed back as data — improving match quality and measuring district-level impact.

These terms (*item*, *action*, *event*, *instance*, *network*, *domain*) are part of a precise, shared vocabulary used throughout the system. See [Core Concepts](/bluedots-docs/core-concepts/) and the [Glossary](/bluedots-docs/core-concepts/glossary/) for definitions.

## Why DPGs

Rather than a single closed product, Blue Dots is built as **Digital Public Goods** so any adaptor can run their own instances, serve their own domains, and still interoperate on a shared contract. The next page explains what that means in practice — see [Blue Dots as a DPG](/bluedots-docs/overview/blue-dots-as-a-dpg/).
