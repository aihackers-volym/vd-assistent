# MASTER — Consumer Template

Version: 1.0
Status: Active

## Governance

This repository is governed by the `@aihackers-volym` shared governance system.
It is a template baseline — adapt per project while keeping fail-closed governance mandatory.

### Packages

- `@aihackers-volym/governance-core` — config-driven governance validation
- `@aihackers-volym/agent-rules-pack` — portable agent rules + overlays
- `@aihackers-volym/agent-layer-validator` — agent-layer configuration validation

### Enforcement

- Governance is enforced via GitHub Actions
- `main` branch is protected by required status checks
- Fail-closed: missing config or files → merge blocked

### Profiles

| Context | Profile | Blocking |
|---|---|---|
| Local fast check | `local-fast` | No |
| CI standard | `ci-standard` | Yes |
| Hard enforcement | `main-hard` | Yes |
