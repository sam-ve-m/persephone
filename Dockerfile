FROM node:16-alpine3.11
RUN apk add --no-cache bash gawk sed grep bc coreutils
ENV NODE_ENV development
COPY . /app/persephone/

WORKDIR /app/persephone

RUN pwd
RUN ls
RUN yarn install
RUN yarn --version


ENTRYPOINT ["yarn", "start"]