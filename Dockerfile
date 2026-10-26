FROM node:20-alpine
WORKDIR /app
COPY package.json ./
COPY bin ./bin
RUN chmod +x ./bin/index.mjs
ENTRYPOINT ["node", "./bin/index.mjs"]
