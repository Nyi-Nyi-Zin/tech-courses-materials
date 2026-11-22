FROM node:24-bookworm-slim AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:24-bookworm-slim
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY --from=build /app/build ./build
COPY database ./database
ENV NODE_ENV=production HOST=0.0.0.0
USER node
EXPOSE 3000
CMD ["npm", "start"]
