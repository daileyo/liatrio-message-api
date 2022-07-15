#stage 1
FROM alpine AS liatrio-node
WORKDIR /liatrio-api
RUN apk add --update nodejs
RUN apk add --update npm

#stage 2
FROM liatrio-node as liatrio-node-api
WORKDIR /liatrio-node-api
COPY package*.json ./ *.js ./
RUN npm install

#stage 3
FROM alpine
RUN apk add --update nodejs
RUN apk add --update npm
ENV PATH /liatrrio-api/node_modules/.bin:$PATH
WORKDIR /liatrio-api
COPY --from=liatrio-node-api /liatrio-node-api /liatrio-api
EXPOSE 4242 4213 3000
CMD npm run start