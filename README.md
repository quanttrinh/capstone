# Capstone

Monorepo for a FastAPI backend and Next.js frontend.

## Prerequisites

- Python 3.14+
- [uv](https://docs.astral.sh/uv/)
- Node.js 24+
- pnpm 11+

## Getting started

Install frontend dependencies:

```bash
pnpm install
```

Install backend dependencies:

```bash
uv sync --directory apps/api
```

Run the apps in separate terminals:

```bash
pnpm dev
pnpm api:dev
```

The frontend runs at `http://localhost:3000` and the API runs at `http://localhost:8000`.
The API health check is available at `http://localhost:8000/health`.

## Containers

Start the frontend, backend, Postgres, and Redis development services with hot reload:

```bash
docker compose up --build
```

Open the repository in a Dev Container to work inside the `workspace` service.
The Compose stack forwards ports `3000`, `8000`, `5432`, and `6379`.

Build production application images without development bind mounts:

```bash
docker build --target production -f apps/api/Dockerfile -t capstone-api:production apps/api
docker build --target production -f apps/web/Dockerfile -t capstone-web:production .
```

Renovate is configured in [renovate.json](renovate.json) to update Python, frontend, and container dependencies automatically.

## Commands

| Command | Purpose |
| --- | --- |
| `pnpm dev` | Start the Next.js development server |
| `pnpm build` | Build the frontend |
| `pnpm lint` | Run Oxlint's Next.js and type-aware integrations |
| `pnpm format` | Format the frontend with Oxfmt |
| `pnpm format:check` | Check frontend formatting with Oxfmt |
| `pnpm api:dev` | Start FastAPI with uv |
| `pnpm api:test` | Compile-check the Python package |
| `pnpm api:lint` | Lint the Python package with Ruff |
| `pnpm api:typecheck` | Type-check the Python package with mypy |
| `pnpm api:check` | Run Ruff and mypy for the backend |