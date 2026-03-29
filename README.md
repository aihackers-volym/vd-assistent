# Governance Consumer Template

A starter repository for projects using the `@aihackers-volym` governance system.

**Profile:** planner-first (default)

## Packages

This repo consumes three shared packages from GitHub Package Registry:

| Package | Purpose |
|---|---|
| `@aihackers-volym/governance-core` | Config-driven governance validation |
| `@aihackers-volym/agent-rules-pack` | Portable agent rules + overlays |
| `@aihackers-volym/agent-layer-validator` | Agent configuration validation |

## What to Edit

### Must customize per project

- **Repo name and description** — update in GitHub settings
- **`docs/master/MASTER.md`** — project-specific governance scope
- **`agent/manifest.json`** — overlay selection for your runtime
- **`agent/capabilities.json`** — enable capabilities your project needs
- **`agent/overlays.json`** — allowed overlays for your profile

### Should normally stay unchanged

- `.rootrules` — governance fundamentals
- `governance.config.json` — validator config
- `.github/workflows/*` — CI governance wrappers
- `.npmrc` — scoped registry config

## Overlay Naming

All overlay identifiers **must** use the `.rules` suffix. This is a locked format rule.

✅ Correct:

```
chatgpt.rules
handover.rules
antigravity.rules
browser.rules
vector.rules
```

❌ Incorrect:

```
chatgpt
handover
browser
vector
```

## Default Profile

| Setting | Value |
|---|---|
| Primary overlay | `chatgpt.rules` |
| Secondary overlays | `handover.rules` |
| `browser` | `false` |
| `vector` | `false` |
| `code_execution` | `false` |

## CI Workflows

| Workflow | Trigger | Purpose |
|---|---|---|
| `repo-governance-fast.yml` | PR | Quick validation |
| `repo-governance-hard.yml` | PR to `main` / merge group | Full enforcement (3 checks) |

Required status checks on `main`:

- `governance-hard / governance-core`
- `governance-hard / agent-layer`
- `governance-hard / secret-scan`

## Quick Start — New Repo From Template

1. **Use this template** → create new repo
2. **Update identity** — repo name, `docs/master/MASTER.md`
3. **Add secret** — `GPR_READ_TOKEN` (Actions + Dependabot)
4. **Install** — `pnpm install`
5. **Verify locally** — `pnpm governance:hard` + `pnpm agent:verify`
6. **Run hard workflow** — `gh workflow run repo-governance-hard.yml`
7. **Activate ruleset** on `main` with required checks
8. **Prove** — 1 green PR (merge allowed) + 1 invalid PR (merge blocked)

> **Full runbook:** [docs/ONBOARDING.md](docs/ONBOARDING.md)

### Executor-first variant

Change only:

- Primary overlay → `antigravity.rules`
- `code_execution` → `true`

Everything else stays the same.

## Secret Safety

- **NEVER** hardcode tokens or secrets in any file
- `.npmrc` uses `${NODE_AUTH_TOKEN}` (environment variable, not a real token)
- Secrets belong in `.env` (gitignored) or GitHub Actions secrets
