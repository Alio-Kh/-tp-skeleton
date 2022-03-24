# stage 1
FROM node:14.17.3-alpine as build
ENV INSTALL_PATH /angular-app
RUN mkdir -p $INSTALL_PATH
WORKDIR $INSTALL_PATH
COPY . .
RUN npm install
RUN npm install -g @angular/cli @angular-devkit/build-angular
RUN npm run build --prod

# stage 2
FROM nginx:alpine
WORKDIR /usr/share/nginx/html/
RUN rm /usr/share/nginx/html/index.html
COPY --from=build /angular-app/../target/resources .

#COPY /usr/share/nginx/html/target/resource/* /usr/share/nginx/html/
EXPOSE 80
