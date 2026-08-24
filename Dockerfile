FROM node:lts-alpine

WORKDIR /app


COPY package.json .

RUN npm ci

COPY . .

ENV NODE_ENV production

ENV PORT 3000



EXPOSE 3000

USER node

CMD ["npm", "start"]