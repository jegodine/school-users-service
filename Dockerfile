FROM node:20.5.1
WORKDIR	/app/service
RUN apt-get update && \
 apt-get upgrade -y && \
 apt-get install -y \
 build-essential
RUN npm init -y && \
 npm config set registry https://registry.npmjs.org && \
 npm install express -y && \
 npm install mongoose -y && \
 npm install -g express-generator -y && \
 express