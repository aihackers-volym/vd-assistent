# Template-Owner Maintenance Guide

How to maintain the governance system across packages, template, workflows, and docs without drift.

## Ownership

| Layer | Repo | Scope |
|---|---|---|
| Packages + validators + reusable workflows | `governance` | Code, publish, overlay registry, enforcement logic, reusable hard workflow |
| Consumer template | `pilot-governance-consumer` | Bootstrap, authority files, agent config baseline, thin workflow wrappers |
| Executor reference | `pilot-governance-executor` | Verified executor-first reference |

## Change Order

Always roll out changes in this sequence:

1. Change in `governance` (packages)
2. Test locally
3. Publish package version
4. Verify external install
5. Update template if needed
6. Update onboarding docs
7. Then roll out to new repos

## What Changes Where

### Only in `governance`

- Package code, rule files, overlay registry
- Validator logic, publish flows
- Reusable workflows (central source of truth for enforcement logic)
- Pinned ref updates for reusable workflows

### Only in consumer template

- Baseline files for new repos
- Planner-first defaults
- Onboarding docs
- Thin workflow wrappers

### Never in individual consumer repos

Don't solve central problems by patching a single project. Fix in `governance` or the template.

## Drift Prevention Checklist

Before closing any governance change, ask:

1. Does this affect package consumption?
2. Does this affect template baseline?
3. Does this affect onboarding runbook?
4. Does this affect ruleset / check names?
5. Does this require new external install verification?

If any answer is "yes", the corresponding layer must be updated in the same cycle.

## Stable Contracts

These are locked contracts — do not rename without updating all downstream:

- Workflow names (`Governance Fast`, `Governance Hard`)
- Hard check names (`governance-hard / governance-core`, `governance-hard / agent-layer`, `governance-hard / secret-scan`)
- Package scope (`@aihackers-volym`)
- `.rules` suffix convention
- Agent config shape (`manifest.json`, `capabilities.json`, `overlays.json`)
- Overlay registry structure
- Reusable workflow path (`governance/.github/workflows/reusable-governance-hard.yml`)

## Template Versioning

The template is not a package. Track version via a baseline marker in `README.md` or `MASTER.md`:

```
template_baseline_version: 1.0.0
```

Update when bootstrap structure changes (new config files, new scripts, new workflow wrappers, new required secrets).

## When to Update the Template

Update only when the change affects repo bootstrap:

- ✅ New mandatory config file
- ✅ Changed agent config format
- ✅ New baseline scripts
- ✅ Changed workflow wrappers
- ✅ New required checks / secrets
- ❌ Internal package refactoring that doesn't affect consumers

## Breaking Change Gate

The following are **always** ecosystem-breaking. Any change to these requires updating all downstream layers in the same cycle:

- Package scope (`@aihackers-volym`)
- `.rules` suffix convention
- Agent config shape (`manifest.json`, `capabilities.json`, `overlays.json`)
- Overlay registry keys
- Required check names (`governance-hard / governance-core`, `governance-hard / agent-layer`, `governance-hard / secret-scan`)
- Ruleset requirements on `main`
- Reusable workflow ref (pinned SHA in caller wrappers)

## Template Drift Audit

After every package release, explicitly verify:

- [ ] Template files still match expected config format
- [ ] Onboarding runbook is still accurate
- [ ] Thin workflow wrappers reference correct reusable workflow SHA
- [ ] Ruleset / check names are unchanged
- [ ] Clean `pnpm install` works in a fresh test repo from template
- [ ] Reusable workflow ref is pinned and up to date

## Supported Baseline Matrix

| Profile | Status | Role |
|---|---|---|
| Planner-first (`chatgpt.rules`) | ✅ Verified | Template default |
| Executor-first (`antigravity.rules`) | ✅ Verified | Reference, not template default |
| Consumer template | `pilot-governance-consumer` | Planner-first bootstrap |
| Executor pilot | `pilot-governance-executor` | Verified reference only |
| Package scope | `@aihackers-volym` | Locked |
| Hard checks | `governance-hard / governance-core`, `governance-hard / agent-layer`, `governance-hard / secret-scan` | Locked (3 names) |
| Hard workflow | `governance/.github/workflows/reusable-governance-hard.yml` | Central source of truth |

## Future Improvements

| Improvement | Priority | Status |
|---|---|---|
| Reusable hard workflow | Done | ✅ Phase A complete |
| Reusable fast workflow | Nice to have | Not started |
| Dependabot standardization | Nice to have | Not started |
| Executor-first template | If needed | Not started |

