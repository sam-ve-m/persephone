FROM node:16-alpine3.11

RUN apk add --no-cache bash gawk sed grep bc coreutils


WORKDIR /app/persephone
COPY . /persephone/
RUN yarn install
RUN yarn build

ENTRYPOINT ["yarn", "dev-start"]