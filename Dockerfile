FROM node:20.11-alpine3.18 AS builder

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

# Backend production
FROM node:20.11-alpine3.18 AS backend-production

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true
ENV CHROMIUM_PATH /usr/bin/chromium-browser

RUN apk add chromium

WORKDIR /app

COPY --from=builder /app/apps/backend/package*.json ./apps/backend/
COPY --from=builder /app/packages/templates/package*.json ./packages/templates/
COPY --from=builder /app/package*.json ./

RUN npm install --omit=dev

COPY --from=builder /app/apps/backend/dist ./apps/backend/dist
COPY --from=builder /app/packages/templates/dist ./packages/templates/dist

# RUN addgroup -S pptruser && adduser -S -G root -g pptruser pptruser
# RUN cd ~/.cache/puppeteer/chrome/linux-*/chrome-linux64/
# RUN chown pptruser:pptruser ~/.cache/puppeteer/chrome/linux-*/chrome-linux64/chrome_sandbox
# RUN chmod 4755 ~/.cache/puppeteer/chrome/linux-*/chrome-linux64/chrome_sandbox
# RUN mkdir -p /usr/local/sbin
# RUN cp -p ~/.cache/puppeteer/chrome/linux-*/chrome-linux64/chrome_sandbox /usr/local/sbin/chrome-devel-sandbox
# RUN export CHROME_DEVEL_SANDBOX=/usr/local/sbin/chrome-devel-sandbox
# ENV CHROME_DEVEL_SANDBOX /usr/local/sbin/chrome-devel-sandbox
# # Switch to the non-root user
# USER pptruser


WORKDIR /app/apps/backend


EXPOSE 5000

CMD ["npm", "run", "start:prod"]

# Frontend production
FROM node:20.11-alpine3.18 AS frontend-production

WORKDIR /app

COPY --from=builder /app/apps/frontend/package*.json ./apps/frontend/
COPY --from=builder /app/packages/templates/package*.json ./packages/templates/
COPY --from=builder /app/package*.json ./

RUN npm install --omit=dev

COPY --from=builder /app/apps/frontend/.next ./apps/frontend/.next
COPY --from=builder /app/packages/templates/dist ./packages/templates/dist


WORKDIR /app/apps/frontend

EXPOSE 3000

CMD ["npm", "run", "start"]

