### STAGE No 1: Build ###
# This image is for installing all the necessary dependencies without installing them onto 
# your system.

FROM node:12.7-alpine AS build
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

### STAGE No 2: Run ###
# Below image is for running the built application onto prod env

FROM nginx:1.17.1-alpine
COPY --from=build /usr/src/app/dist/Quiz /usr/share/nginx/html
