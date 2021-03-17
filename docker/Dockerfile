FROM node:14.15.0-alpine

WORKDIR /forum-server


COPY . .
RUN yarn --network-timeout 10000000
RUN yarn prebuild
RUN yarn build

CMD ["yarn", "start:dev"]