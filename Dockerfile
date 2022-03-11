FROM node:16-alpine3.11

RUN apk add --no-cache bash gawk sed grep bc coreutils


WORKDIR /app
COPY . .
RUN yarn install

ENTRYPOINT ["yarn", "dev-start"]