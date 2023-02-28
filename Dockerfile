FROM alpine:3.17

RUN apk add nodejs

WORKDIR /app
COPY . .

CMD [ "node", "/app/index.js" ]
