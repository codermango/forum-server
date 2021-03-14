FROM node:14.15.0-alpine

WORKDIR /forum-server

# Copy entire project (overrides package.json files so we have the version)
COPY . .
RUN yarn
RUN yarn prebuild
RUN yarn build

CMD ["yarn", "start:prod"]