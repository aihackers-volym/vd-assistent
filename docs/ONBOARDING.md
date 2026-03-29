# Onboarding Runbook — New Project From Template

Standard checklist for creating a new project from the `aihackers-volym/pilot-governance-consumer` template.

## Prerequisites

- GitHub org member with repo creation permissions
- `GPR_READ_TOKEN` (GitHub personal access token with `read:packages` scope)
- `gh` CLI authenticated

## Steps

### 1. Create repo from template

```bash
gh repo create aihackers-volym/<PROJECT_NAME> \
  --template aihackers-volym/pilot-governance-consumer \
  --private \
  --clone
```

### 2. Update repo identity

- Rename title in `docs/master/MASTER.md`, `AGENTS.md`, `.rootrules`
- Replace "Consumer Template" with your project name

### 3. Review agent profile

Default profile (planner-first):

| Setting | Default |
|---|---|
| Primary overlay | `chatgpt.rules` |
| Secondary overlays | `handover.rules` |
| `browser` | `false` |
| `vector` | `false` |
| `code_execution` | `false` |

Edit `agent/manifest.json`, `agent/capabilities.json`, `agent/overlays.json` **only** if your project needs a different profile.

> **Rule:** All overlay identifiers must use the `.rules` suffix.

### 4. Add package-read secret

```bash
gh secret set GPR_READ_TOKEN --repo aihackers-volym/<PROJECT_NAME>
```

Paste your `read:packages` token when prompted.

### 5. Install dependencies

```bash
corepack enable
pnpm install
```

### 6. Run hard workflow

The hard workflow is a thin local wrapper that calls the central reusable workflow in `aihackers-volym/governance`.

```bash
gh workflow run repo-governance-hard.yml --repo aihackers-volym/<PROJECT_NAME>
```

Wait for all 3 checks green: `governance-hard / governance-core`, `governance-hard / agent-layer`, `governance-hard / secret-scan`.

### 7. Activate ruleset on `main`

```bash
cat <<'EOF' > /tmp/ruleset.json
{
  "name": "Governance Enforcement",
  "target": "branch",
  "enforcement": "active",
  "conditions": {
    "ref_name": {
      "include": ["refs/heads/main"],
      "exclude": []
    }
  },
  "rules": [
    {
      "type": "pull_request",
      "parameters": {
        "required_approving_review_count": 0,
        "dismiss_stale_reviews_on_push": false,
        "require_code_owner_review": false,
        "require_last_push_approval": false,
        "required_review_thread_resolution": false
      }
    },
    {
      "type": "required_status_checks",
      "parameters": {
        "strict_required_status_checks_policy": true,
        "required_status_checks": [
          { "context": "governance-hard / governance-core" },
          { "context": "governance-hard / agent-layer" },
          { "context": "governance-hard / secret-scan" }
        ]
      }
    },
    { "type": "non_fast_forward" },
    { "type": "deletion" }
  ]
}
EOF

gh api repos/aihackers-volym/<PROJECT_NAME>/rulesets \
  --method POST --input /tmp/ruleset.json
```

### 8. Verify (optional but recommended)

**Positive test:** Open a PR with a harmless docs change → all checks green → merge allowed.

**Negative test:** Open a PR adding `browser.rules` to `manifest.json` without enabling `browser` capability → `agent-layer` fails → merge blocked → close without merge.

## Done

Your project is now governance-enforced and fail-closed.
