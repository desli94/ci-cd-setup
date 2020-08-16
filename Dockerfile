FROM node:alpine
EXPOSE 80

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ ./

CMD ["npm", "start"]