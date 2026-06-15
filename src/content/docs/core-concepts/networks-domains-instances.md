---
title: Networks, Domains & Instances
description: The three structural concepts that make Blue Dots network-aware.
sidebar:
  order: 3
---

Three structural concepts make Blue Dots **network-aware**. They are distinct and should not be conflated.

## Network

A **network** is the *shared contract* that lets independent deployments interoperate — for example `blue_dot` or `yellow_dot`. A network is defined by a `network.json` schema that specifies the item types, actions and events that participants on that network agree to speak.

Think of a network as a language: any instance that "speaks" the `blue_dot` network can discover and exchange signals with any other instance on it.

## Domain

A **domain** is a *role inside a network* — for example `student`. A single network can have many domains (seeker roles, provider roles, service roles). An instance declares which domains it serves through configuration (`SERVED_DOMAINS`).

## Instance

An **instance** is *one deployment* of the Signals API serving its configured domains. A district might run its own instance; a state program might run several. Instances are independent deployments that cooperate over the network contract — there is no central database every instance must share.

## How they fit together

```text
network: blue_dot                     (the shared contract / schema)
│
├── domain: student        ─┐
├── domain: employer        │  roles within the network
├── domain: service          │
│                           ─┘
└── instance: ghaziabad-livelihoods   (a deployment serving one or more domains)
    instance: dharwad-livelihoods
    instance: state-skilling
```

When you add a feature or a read endpoint, decide **which network and domain** it belongs to, and **which instance layer** it reads from, before writing code. The two read layers (instance-local vs. inter-instance) are covered in [Read & Write Paths](/bluedots-docs/core-concepts/technical/read-write-paths/).
