#Primera Etapa
FROM node:18-alpine as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build 
#Segunda Etapa
FROM nginx:stable-alpine
COPY --from=build-step /app/dist/front /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
