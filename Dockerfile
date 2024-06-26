FROM node:16.8.0

WORKDIR /app

COPY package.json wait-for-it.sh ./

RUN yarn install

RUN chmod +x wait-for-it.sh

COPY /dist .
COPY . .

ENV NODE_ENV=production
ENV MONGODB_HOST=mongo
ENV PORT 3001

EXPOSE $PORT

CMD  ./wait-for-it.sh mongo:27017 --timeout=1000 -- ./start.sh