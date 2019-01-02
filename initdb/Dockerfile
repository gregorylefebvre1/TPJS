FROM node:alpine

WORKDIR /stock

COPY . .

RUN yarn

EXPOSE 8080

CMD [ "yarn", "run", "start" ]