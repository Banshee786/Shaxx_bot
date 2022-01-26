FROM node:lts-buster as builder

WORKDIR /usr/src/app

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:/home/node/.npm-global/bin

COPY package*.json ./

RUN apt-get update && \
    apt-get install -y build-essential libsodium-dev libsodium23 && \
    rm -r /var/lib/apt/lists/* && \
    npm install && npm ci --only=production

FROM node:lts-buster as app

COPY --from=builder node_modules .
COPY . .

USER node

EXPOSE 8080

CMD [ "node", "index.js", "-e", "NODE_ENV=production" ]
