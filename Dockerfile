FROM node:lts-slim AS builder

WORKDIR /usr/src/app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .

EXPOSE 8080

RUN [ "yarn", "build" ]

FROM nginx

COPY --from=builder /usr/src/app/dist /usr/share/nginx/html



