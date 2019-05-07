
# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM tiangolo/node-frontend:10 as build-stage

WORKDIR /app
COPY package.json /app/
COPY yarn.lock /app/
RUN yarn install

COPY ./ /app/
RUN CI=true yarn test
RUN yarn build

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.15

COPY --from=build-stage /app/build/ /usr/share/nginx/html

COPY --from=build-stage /nginx.conf /etc/nginx/conf.d/default.conf

# FROM node:latest as build-stage
# WORKDIR /app
# COPY package*.json /app/
# COPY yarn.lock /app/
# RUN yarn install
# COPY . .
# RUN yarn build

# FROM nginx
# COPY --from=build-stage /app/build /usr/share/nginx/html
# CMD ["nginx", "-g", "daemon off;"]




# # base image
# FROM node:11.10.1-alpine

# # set working directory
# RUN mkdir /app
# WORKDIR /app

# # add `/usr/src/app/node_modules/.bin` to $PATH
# ENV PATH /usr/app/node_modules/.bin:$PATH

# # install and cache app dependencies
# COPY package.json .
# RUN yarn
# COPY . .
# # start app
# CMD ["yarn", "start"]