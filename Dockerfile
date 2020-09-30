FROM node:13.12.0-alpine

WORKDIR /app

COPY /app/package.json ./
COPY /app/package-lock.json ./

RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g 

COPY /app/ /app/

CMD ["npm", "start"]