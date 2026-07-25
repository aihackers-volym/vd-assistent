# vd-assistent

VD-assistent — AI-baserat VD-stöd för prioritering, beslutsstöd och uppföljning.

See [`docs/master/MASTER.md`](docs/master/MASTER.md) for project scope and the
strategic document index.

## Governance

This repo previously consumed the shared `@aihackers-volym` governance package
system (`governance-core`, `agent-rules-pack`, `agent-layer-validator`) plus a
`repo-governance-fast`/`repo-governance-hard` CI wrapper. That system has been
deprecated org-wide and removed from this repo. The old `agent/` config and
`governance.config.json` are archived for reference in
[`docs/archive/legacy-governance-2026-07-25/`](docs/archive/legacy-governance-2026-07-25/).

## Secret Safety

- **NEVER** hardcode tokens or secrets in any file
- Secrets belong in `.env` (gitignored) or GitHub Actions secrets
