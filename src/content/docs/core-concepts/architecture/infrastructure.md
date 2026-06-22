---
title: Infrastructure & Deployment Architecture
description: How Blue Dots is provisioned and deployed — AWS EKS via OpenTofu/Terragrunt, Helm umbrella charts, Kong ingress, and TLS.
sidebar:
  order: 6
---

This page describes how a Blue Dots deployment is *provisioned and run* on a cluster. It is grounded in the `bluedots-automation` repository, which does two things: provisions AWS infrastructure with **OpenTofu + Terragrunt**, and deploys the application stack with **Helm**. A single `install.sh` per environment is the entrypoint for both.

## Two layers

```text
┌───────────────────────────────────────────────────────────┐
│ Apps (Helm)   common-services → signals → aggregator (+ monitoring) │
├───────────────────────────────────────────────────────────┤
│ Infra (OpenTofu/Terragrunt)   VPC · EKS · IAM/IRSA · S3 · storage   │
└───────────────────────────────────────────────────────────┘
        one entrypoint:  opentofu/aws/<env>/install.sh
```

## Infrastructure: OpenTofu + Terragrunt

Infrastructure is defined as code under `opentofu/aws/`. Each environment is a directory (`opentofu/aws/<env>/`) created by copying `template/`. Terragrunt wraps OpenTofu to give per-module state and dependency wiring; modules apply in order:

```text
network → eks → iam → storage → random_passwords → output-file
```

| Module | Provisions |
| --- | --- |
| `network` | VPC, subnets, routing |
| `eks` | the EKS cluster and node group |
| `iam` | IAM roles incl. **IRSA** (service-account → role) |
| `storage` | storage resources; `gp3` is made the default StorageClass |
| `random_passwords` | generated Postgres/Redis credentials |
| `output-file` | **generates the per-chart Helm values files** (see below) |

The only file you normally edit per environment is **`global-values.yaml`** — region, EKS sizing, public hostnames, network/domains, SMTP/SMS, and alert recipients. A `tf.sh` file carries the AWS region and the remote-state S3 bucket name and is sourced before any `terragrunt` run.

Per-module `plan`/`apply` functions exist (`apply_tf_eks`, etc.) and honour `AUTO_APPROVE=1` for non-interactive runs.

## The generated values-file model

Helm charts never hardcode secrets or hostnames. The `output-file` module reads outputs from the other modules and templates **one values file per chart** at the YAML root level, so Helm consumes each with a single `-f` — no slicing, no `yq`:

```text
opentofu/aws/<env>/common-services-values.yaml
opentofu/aws/<env>/signals-values.yaml
opentofu/aws/<env>/aggregator-values.yaml
```

Shared secrets (e.g. the Redis password used by all charts) are templated into each file from the same `random_passwords` value, so they can never drift. Re-running `terragrunt apply` on the `output-file` unit **regenerates and overwrites** these files — so any manual edits must be applied after the final apply, or baked into the `.tfpl` templates.

Alongside these, three checked-in config files feed every deploy:

- `global-values.yaml` — non-secret config (hosts, network, served domains).
- `global-images.yaml` — per-environment image pins (see [CI/CD & Build Pipeline](/bluedots-docs/guides/cicd-and-builds/)).
- `helm/global-resources.yaml` — replica counts, HPA, PDB and container resources, shared across environments.

## Application stack: Helm umbrella charts

Three umbrella charts (plus a monitoring chart) deploy in **strict dependency order**:

| # | Chart dir | Namespace | Deploys |
| --- | --- | --- | --- |
| 1 | `helm/common-services` | `common-services` | Kong ingress controller, cert-manager, `letsencrypt-prod` issuer, shared **Postgres + Redis** |
| 2 | `helm/signals` | `signals` | Signals: api, ui, notification-service, match-score, search |
| 3 | `helm/aggregator` | `aggregator` | Aggregator: web (BFF), api, worker, keycloak |
| — | `helm/monitoring` | `monitoring` | Prometheus, Alertmanager, Loki, Alloy, Grafana (deployed first so metrics are live) |

`common-services` must be healthy (Postgres + Redis Ready, PVCs bound) before `signals` and `aggregator`, which connect to the shared datastores at `…svc.cluster.local`. The aggregator's Keycloak init job runs after Postgres is Ready, making it the slowest release.

:::note[Names don't match directories]
A chart's directory, chart name, release name and namespace can all differ. The Signals stack lives in `helm/signals/`. Treat `install.sh` and `DEPLOYMENT.md` as the source of truth for what deploys where.
:::

## Ingress & rate limiting: Kong

`common-services` runs the **Kong** ingress controller (DB-less) as the sole controller; `kong` is the cluster-default IngressClass and every app Ingress sets `ingressClassName: kong`. Rate limiting is enforced by `KongClusterPlugin` tiers (`rl-auth`, `rl-api`, `rl-public`) attached per route via the `konghq.com/plugins` annotation, with counters backed by the shared Redis (`policy: redis`) so limits hold across Kong replicas.

Kong's CRDs ship inside the vendored subchart, but Helm only installs subchart CRDs on first install and never updates them on upgrade — so `deploy_common_services` applies the CRDs explicitly (`kubectl apply --server-side`) before every Helm run.

## TLS: cert-manager + Let's Encrypt

`common-services` installs cert-manager and a `letsencrypt-prod` `ClusterIssuer`. Certificates are issued automatically via ACME once DNS for the public hosts points at the Kong proxy LoadBalancer. (A known cert-manager v1.20.2 ACME bug is worked around by a `fix_acme_issuer_uri` step in `install.sh`.)

## Identity at runtime

Keycloak (Aggregator) and Better-Auth + API keys (Signals) are covered in [Identity & Auth](/bluedots-docs/core-concepts/architecture/identity-and-auth/). One deployment-time detail: the aggregator's `global.signalstack.actingOrgId` must be set **after** Signals is deployed (it is read from the seeded `organization` table via `get-signalstack-org-id.sh`), or aggregator login fails with `SIGNALSTACK_ORG_NOT_REGISTERED`.

## Where to go next

- Run it: [Deployment guide](/bluedots-docs/guides/deployment/).
- Ship to it: [CI/CD & Build Pipeline](/bluedots-docs/guides/cicd-and-builds/).
- Configure it: [Configuration](/bluedots-docs/guides/configuration/).
