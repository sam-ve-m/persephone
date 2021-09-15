FROM node:16-alpine3.11
RUN apk add --no-cache bash gawk sed grep bc coreutils
ENV NODE_ENV yaba

COPY . /app/persephone/

WORKDIR /app/persephone

RUN yarn install

ENTRYPOINT ["yarn", "sit-start"]