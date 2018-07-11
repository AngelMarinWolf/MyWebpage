# Build Image
FROM node:8.11-alpine as build

WORKDIR /var/app

COPY package.json package-lock.json ./

RUN npm install && npm install -g @angular/cli

COPY . ./

RUN ng build

# Runtime Image
FROM nginx:1.14-alpine as artifact

LABEL name="Angel Web Page" \
      version="2.0" \
      maintainer="Angel Marin <marin.miguelangel96@gmail.com>"

COPY Docker/nginx/templates/nginx.conf /etc/nginx/nginx.conf

COPY Docker/nginx/templates/000-app.conf /etc/nginx/conf.d/

WORKDIR /var/app

COPY --from=build --chown=nginx:nginx /var/app/dist .

EXPOSE 80

STOPSIGNAL SIGTERM

CMD ["nginx", "-g", "daemon off;"]s
