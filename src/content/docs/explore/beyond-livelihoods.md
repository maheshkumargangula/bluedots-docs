---
title: "Beyond Livelihoods: The Dots Family"
description: How the same discovery rails extend across sectors, and what it takes to add one.
sidebar:
  order: 3
---

**Blue Dots** is the umbrella brand for a shared digital discovery infrastructure. The same open, shared rails surface local demand and supply in different **colors and icons** depending on the persona and the need — not separate systems, and not a single closed marketplace.

This fluidic exchange lets specialised discovery ride a shared rail, turning a district into an interconnected economic engine. In every case, voice and vernacular AI create a dot in **2–3 minutes** — about as fast as making an instant coffee — on any phone, in any local language.

## The Dots family

| Dot | Persona / Sector | The discovery problem | Scale |
|---|---|---|---|
| <img class="dot-icon" src="/bluedots-docs/dots/dot-blue.svg" alt="Blue dot" /> <span class="dot-name dot-name--blue">Blue</span> | Livelihoods for youth | Youth and employers stay invisible to each other even two bus stops apart | <50% youth placement rate in India |
| <img class="dot-icon" src="/bluedots-docs/dots/dot-pink.svg" alt="Pink dot" /> <span class="dot-name dot-name--pink">Pink</span> | Greater female labour-force participation | Women and flexible-work opportunities remain digitally dark | <35% female labour-force participation in India |
| <img class="dot-icon" src="/bluedots-docs/dots/dot-purple.svg" alt="Purple dot" /> <span class="dot-name dot-name--purple">Purple</span> | Economic participation by Persons with Disabilities | Discovery failure of livelihoods and services becomes a forced exit from the economy | ~100 million PwDs can take an active part in India's economy |
| <img class="dot-icon" src="/bluedots-docs/dots/dot-orange.svg" alt="Orange dot" /> <span class="dot-name dot-name--orange">Orange</span> | Growing the tourism economy | Local guides, experiences and artisans stay digitally dark | Indian tourism projected to grow from $78 Bn to $3 Tn by 2047 |
| <img class="dot-icon" src="/bluedots-docs/dots/dot-green.svg" alt="Green dot" /> <span class="dot-name dot-name--green">Green</span> | Boosting efficiency of farming | Farm labour, equipment repair and storage stay digitally dark | ~$12 billion in crop value lost annually |
| <img class="dot-icon" src="/bluedots-docs/dots/dot-brown.svg" alt="Brown dot" /> <span class="dot-name dot-name--brown">Brown</span> | Powering growth for SMBs | SMBs throttled by invisible local barriers, forced to stay small | ~60 million SMBs in India employ fewer than 10 people each |

:::note
Each color is the **same rail** in a different sector context — a set of [domains](/bluedots-docs/core-concepts/networks-domains-instances/) and item schemas, not a new platform.
:::

### <img class="dot-icon" src="/bluedots-docs/dots/dot-blue.svg" alt="" />Blue Dots — Livelihoods for Youth

Local discovery failure keeps youth and employers invisible to each other even two bus stops apart. Youth lose income, employers lose productivity, and the demographic dividend stalls.

> "I guess I will have to move to a city to find a job."
>
> → "I didn't realize there are 100s of relevant jobs in my vicinity!"

### <img class="dot-icon" src="/bluedots-docs/dots/dot-pink.svg" alt="" />Pink Dots — Greater Female Labour-Force Participation

Women and flexible-work opportunities remain digitally dark. Every day lost finding work is lost income and a stalled economy that sidelines 50% of the population.

> "I don't want to travel more than 20 minutes for work."
>
> → "Spoke for 2 mins and I can now see remote work and roles just two bus stops away."

### <img class="dot-icon" src="/bluedots-docs/dots/dot-purple.svg" alt="" />Purple Dots — Economic Participation by Persons with Disabilities

For PwDs, local discovery failure of livelihoods and services is a forced exit from the economy. Every month waiting for an assistive device, skilling, or a livelihood option is lost income. Blue Dots let livelihoods, schemes and services find PwDs within 5 km.

> "I don't know who to talk to for the support I need to start working."
>
> → "I just highlighted my needs and I can already see options for both work and services!"

### <img class="dot-icon" src="/bluedots-docs/dots/dot-orange.svg" alt="" />Orange Dots — Growing the Tourism Economy

Local guides, tour experiences and artisans remain digitally dark. High-friction discovery pushes travelers to overcrowded hubs and forces local entrepreneurs out.

> "I don't know how to attract more customers."
>
> → "I just spoke about my work and somehow, three customers have made an enquiry!"

### <img class="dot-icon" src="/bluedots-docs/dots/dot-green.svg" alt="" />Green Dots — Boosting Efficiency of Farming

Farm labour, equipment repair and storage stay digitally dark. A farmer who can't find a local mechanic or labour in time loses productivity and margin — a direct tax on the agriculture economy.

> "The crop is ready, but I can't find farm labour anywhere and the rain is coming."
>
> → "Took just a few minutes to find many options of farm labour nearby!"

### <img class="dot-icon" src="/bluedots-docs/dots/dot-brown.svg" alt="" />Brown Dots — Powering Growth for SMBs

SMBs are throttled by invisible local barriers. When "digitally dark" they miss nearby customers and struggle to source services and supplies, forced to stay small.

> "I've found it hard to grow my business because nobody knows we're here."

## Adding a color is modelling, not rebuilding

Because Blue Dots is [schema-driven](/bluedots-docs/core-concepts/technical/schema-driven-model/), introducing a new color or sector is primarily a **modelling** exercise, not a rebuild:

1. Define the **domain(s)** for the sector (the seeker and provider roles).
2. Define the **item schemas** (e.g. a service-offer type, an eligibility-profile type).
3. Configure the instance's `SERVED_DOMAINS`.
4. Add capture channels and any sector-specific notifications.
5. Pilot and measure.

The discovery problem is shared across every color; solving it once, as a DPG, lets every sector reuse the same rails. See the [Use Cases](/bluedots-docs/explore/use-cases/) for worked examples.
