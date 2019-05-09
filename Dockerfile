
# Stage 1, "build-stage", based on Node.js, to build and compile the frontend
FROM tiangolo/node-frontend:10 as build-stage

WORKDIR /app
COPY package.json /app/
COPY yarn.lock /app/
RUN yarn install

COPY ./ /app/
RUN CI=true yarn test --coverage && yarn build

# Stage 2, prepare for production with Nginx
FROM nginx:1.15-alpine

EXPOSE 80

COPY --from=build-stage /app/build/ /usr/share/nginx/html

COPY --from=build-stage /nginx.conf /etc/nginx/conf.d/default.conf

