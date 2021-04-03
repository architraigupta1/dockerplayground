FROM node:alpine

WORKDIR /app

COPY demoapp/package.json ./

RUN npm install

COPY demoapp ./

RUN npm run build

FROM nginx

EXPOSE 80

COPY --from=0 /app/build /usr/share/nginx/html