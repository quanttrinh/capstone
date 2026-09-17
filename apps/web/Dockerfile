FROM node:24-bookworm-slim AS base

RUN corepack enable && corepack prepare pnpm@11.24.0 --activate

WORKDIR /workspace

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/web/package.json apps/web/package.json
RUN pnpm install --frozen-lockfile

FROM base AS dev

COPY apps/web apps/web

WORKDIR /workspace/apps/web
EXPOSE 3000

CMD ["pnpm", "dev", "--hostname", "0.0.0.0"]

FROM base AS builder

COPY apps/web apps/web
RUN pnpm --filter web build

FROM node:24-bookworm-slim AS production

WORKDIR /app
ENV NODE_ENV=production

RUN rm -f /usr/local/bin/npm /usr/local/bin/npx /usr/local/bin/corepack /usr/local/bin/yarn /usr/local/bin/yarnpkg \
	&& rm -rf /usr/local/lib/node_modules/npm /usr/local/lib/node_modules/corepack

COPY --from=builder /workspace/apps/web/public ./apps/web/public
COPY --from=builder /workspace/apps/web/.next/standalone ./
COPY --from=builder /workspace/apps/web/.next/static ./apps/web/.next/static

EXPOSE 3000

CMD ["node", "apps/web/server.js"]