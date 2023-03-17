FROM alpine:3.17

LABEL org.opencontainers.image.source=https://github.com/trainingspaces/github-actions

RUN apk add nodejs npm

WORKDIR /app
COPY . .

RUN npm ci

EXPOSE 3000

CMD [ "node", "src/index.js" ]
