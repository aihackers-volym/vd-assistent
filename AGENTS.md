# AGENTS — Consumer Template

## Authority Hierarchy

1. `docs/master/MASTER.md`
2. `.rootrules`
3. `AGENTS.md`
4. `.agentrules`

## Agent Configuration

Agent layer configuration lives in `agent/`:

- `agent/manifest.json` — rules pack, core rules, overlay selection
- `agent/capabilities.json` — capability declarations
- `agent/overlays.json` — overlay constraints

All overlay identifiers must use the `.rules` suffix (e.g. `chatgpt.rules`, `handover.rules`).

## Governance Validation

Governance runs through CI:

- `governance-core` validates repo structure and authority files
- `agent-layer-validator` validates agent configuration against rules pack

## Secret Safety — MANDATORY

**All terminal commands are visible to the agent runtime. Secrets must NEVER appear in commands.**

- **NEVER** propose `export TOKEN=value` or any command containing a secret
- **NEVER** read, log, or reference the contents of `.env`, `*.pem`, `*.key`
- **ALWAYS** use `.env` (gitignored) for secrets
- If a secret is accidentally exposed, **immediately** tell the user to rotate it
