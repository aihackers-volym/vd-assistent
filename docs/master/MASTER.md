# MASTER — VD-assistent

Version: 1.0
Status: Active

## Project

VD-assistent — AI-baserat VD-stöd för prioritering, beslutsstöd och uppföljning.

## Strategic Documents

| Level | Document | Description |
|---|---|---|
| L1 | [L1.md](file:///Users/andreasbladini/apps/vd-assistent/docs/L1.md) | Målbild, principer, scope, värdelogik |
| L2 | [L2-R1-KNOWLEDGE-ACQUISITION.md](file:///Users/andreasbladini/apps/vd-assistent/docs/L2-R1-KNOWLEDGE-ACQUISITION.md) | R1 Knowledge Acquisition — första slice |
| R1 | [QUESTION-ENGINE-V1.md](file:///Users/andreasbladini/apps/vd-assistent/docs/r1/QUESTION-ENGINE-V1.md) | Question Engine v1 — struktur och pipeline |
| R1 | [MOCK-EMAIL-DECISION.md](file:///Users/andreasbladini/apps/vd-assistent/docs/r1/MOCK-EMAIL-DECISION.md) | Mockad mejlbas — R1A mock, R1B real replacement |
| R1 | [MOCK-EMAIL-PACK-V1.md](file:///Users/andreasbladini/apps/vd-assistent/docs/r1/MOCK-EMAIL-PACK-V1.md) | 12 mockade mejlcase för kärnlogiktest |
| R1 | [AUTONOMY-POLICY.md](file:///Users/andreasbladini/apps/vd-assistent/docs/r1/AUTONOMY-POLICY.md) | Fas 1 autonomy — AI föreslår, Jonas beslutar |

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
