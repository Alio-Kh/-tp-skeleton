FROM node:14
ENV INSTALL_PATH /angular-app
RUN mkdir -p $INSTALL_PATH
WORKDIR $INSTALL_PATH
COPY package.json .
RUN npm install -g @angular/cli @angular-devkit/build-angular && npm install
COPY . .
CMD ["npm", "start"]
