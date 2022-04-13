FROM node:alpine
FROM mongo:alpine

WORKDIR /usr/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["yarn", "dev"]