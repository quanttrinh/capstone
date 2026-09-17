FROM astral/uv:latest AS uv
FROM python:3.14-slim AS base

COPY --from=uv /uv /uvx /bin/

WORKDIR /app

ENV UV_COMPILE_BYTECODE=1 \
    UV_LINK_MODE=copy

COPY pyproject.toml uv.lock ./
COPY src ./src

FROM base AS dev

RUN uv sync --locked

COPY app ./app

EXPOSE 8000

CMD ["uv", "run", "fastapi", "dev", "app/main.py", "--host", "0.0.0.0", "--port", "8000"]

FROM base AS production-deps

RUN uv sync --locked --no-dev

FROM python:3.14-slim AS production

WORKDIR /app

COPY --from=production-deps /app/.venv ./.venv
COPY app ./app

ENV PATH="/app/.venv/bin:/usr/local/bin:/usr/local/sbin:/usr/sbin:/usr/bin:/sbin:/bin"

EXPOSE 8000

CMD ["/app/.venv/bin/uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]