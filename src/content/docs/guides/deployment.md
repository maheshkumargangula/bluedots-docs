---
title: Deployment
description: Moving Blue Dots from localhost to a VM or cloud, and deploying this documentation site.
sidebar:
  order: 8
---

## Deploying the DPGs

### Run modes

- **Hybrid (dev)** — backing services in Docker, apps on the host.
- **Docker-only (VM / prod-like)** — `make setup && make up`. All env values live in a single root `.env`, sectioned per service (`infra/env.template` is canonical).

### Moving off localhost

When deploying to a VM:

1. Replace `localhost` and `keycloak` everywhere in `.env` with the VM hostname/IP.
2. Update the `aggregator-portal` Keycloak client's **Valid Redirect URIs** and **Web Origins** in the admin console.
3. Because `NEXT_PUBLIC_API_URL` is baked at compile time, redeploy the web app with `docker compose up -d --build`.
4. Provision real **S3** credentials (IAM role preferred) — S3 is never containerised.

### CI / images

The Aggregator's GitHub Actions `CI` job runs `lint`, `typecheck`, `test`, `build` and `dep-check` on every PR. A `docker / {api,web,worker}` matrix builds images and publishes to GHCR on non-PR pushes; per-app tags (`web-v*`, `api-v*`, `worker-v*`) cut release images. Branch protection requires the `CI` check.

## Deploying this documentation site

This site is **Astro + Starlight**, deployed to **GitHub Pages** via GitHub Actions.

### One-time GitHub setup

1. Push the `bluedots-docs` project to a repository (e.g. `Blue-Dots-Economy/bluedots-docs`).
2. In **Settings → Pages**, set **Source = GitHub Actions**.
3. Confirm `astro.config.mjs` has the right `site` and `base`:
   ```js
   site: 'https://blue-dots-economy.github.io',
   base: '/bluedots-docs',
   ```
   For a custom domain (e.g. `docs.bluedotseconomy.org`), set `site` to that domain, remove `base`, and add a `CNAME` file in `public/`.

### The workflow

The bundled workflow at `.github/workflows/deploy.yml` builds with the official `withastro/action` and publishes on every push to `main`. After the first successful run, the site is live at the configured URL.

### Local preview

```bash
pnpm install
pnpm dev        # local dev server
pnpm build      # production build to dist/
pnpm preview    # preview the production build
```
