FROM alpine:3.17

LABEL org.opencontainers.image.source=https://github.com/trainingspaces/github-actions

RUN apk add nodejs

WORKDIR /app
COPY . .

CMD [ "node", "/app/src/index.js" ]
