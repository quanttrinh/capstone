# AI Use

## Tools

- **GitHub Copilot**: assist with design exploration, implementation, debugging, and documentation.
- **Renovate**: propose dependency updates for the uv-managed Python backend, pnpm frontend, and container images.
- **uv**: manage Python dependencies and environments; run FastAPI, Ruff, and mypy.
- **pnpm**: manage the TypeScript workspace and frontend dependencies.
- **Oxlint and Oxfmt**: lint and format frontend code.
- **Docker and Dev Containers**: build, run, and validate development and production environments.

## Review Before Merge

AI-generated code is treated as a draft. A human owner reviews the change for correctness, security, licensing, maintainability, and consistency with the repository before it lands.

Every change must have an understandable purpose, avoid secrets and untrusted generated content, and pass the relevant checks. For this repository, that includes frontend Oxlint/Oxfmt checks, backend Ruff/mypy checks, tests or smoke checks, and Docker or Compose validation when container files change.

Reviewers verify dependency and configuration updates against their lockfiles and inspect generated code rather than approving it solely because automation passes. Changes that affect behavior should include or update focused tests and documentation. Renovate pull requests follow the same review standard as human-authored changes.

## Provenance

Do not annotate individual source files with AI notices. File-level notices become stale after refactoring and add noise to the codebase.

Record AI assistance on the change with a git commit trailer:

```text
Assisted-by: AGENT_NAME:MODEL_VERSION [TOOL1] [TOOL2]
```

For example:

```text
Assisted-by: Claude:claude-opus-4-5
```

Use `Assisted-by:` rather than `Co-authored-by:` because AI tools cannot hold legal authorship, and rather than `Generated-by:` because most changes are reviewed and shaped by people. An AI agent must never add `Signed-off-by:`; that certifies contribution origin and can only be supplied by a human.

This document should be updated when the team changes its AI tools, dependency tooling, or review practice.
