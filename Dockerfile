FROM node:20.11-alpine3.18 as base

# Install dependencies only when needed
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true

WORKDIR /app

COPY . .

RUN npm ci

FROM base AS builder-frontend

ENV NEXT_TELEMETRY_DISABLED 1

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/apps/frontend/node_modules ./apps/frontend/node_modules

COPY . .

RUN npm run build:front

FROM base as builder-backend

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/apps/backend/node_modules* ./apps/backend/node_modules

COPY . .

RUN npm run build:back


# Backend production
FROM base AS backend-production

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true
ENV CHROMIUM_PATH /usr/bin/chromium-browser

RUN apk add chromium

WORKDIR /app

COPY --from=builder-backend /app/package*.json ./
COPY --from=builder-backend /app/apps/backend/package*.json ./apps/backend/

RUN npm زi --omit=dev
COPY --from=builder-backend /app/apps/backend/dist ./apps/backend/dist


EXPOSE 5000

CMD ["node", "./apps/backend/dist/apps/backend/src/main"]

# Frontend production
FROM node:20.11-alpine3.18 AS frontend-production

WORKDIR /app

COPY --from=builder-frontend /app/apps/frontend/.next/standalone ./
COPY --from=builder-frontend /app/apps/frontend/.next/static ./apps/frontend/.next/static
COPY --from=builder-frontend /app/apps/frontend/public ./apps/frontend/public


WORKDIR /app/apps/frontend

EXPOSE 3000

CMD ["node","./server.js"]

