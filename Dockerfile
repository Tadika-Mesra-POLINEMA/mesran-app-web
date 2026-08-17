FROM node:20-alpine AS build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build

FROM node:20-alpine AS production

WORKDIR /usr/src/app

COPY --from=build /usr/src/app/package*.json ./
RUN npm install --production --legacy-peer-deps

COPY --from=build /usr/src/app/.next ./.next
COPY --from=build /usr/src/app/public ./public

ENV PORT=3001
ENV HOSTNAME="0.0.0.0"

EXPOSE 3001

CMD ["npm", "start"]
