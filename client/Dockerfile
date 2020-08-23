# pull official base image
FROM node:13.12.0-alpine as node-build

# set working directory
WORKDIR /build

COPY . .

RUN npm install

RUN npm run build

FROM node:13.12.0-alpine

WORKDIR /opt/website

COPY --from=node-build /build/build .
# add app
RUN npm install -g serve
# start app
ENTRYPOINT ["/usr/local/bin/serve", "-l", "3000"]
