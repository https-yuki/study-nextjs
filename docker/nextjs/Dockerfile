FROM node:22.13.1

WORKDIR /app

COPY app/package.json app/package-lock.json ./

RUN npm install

CMD ["npx", "next", "dev"]
