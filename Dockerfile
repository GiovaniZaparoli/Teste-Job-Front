FROM node:14.16.1-alpine

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY ./ ./

RUN yarn install --silent --ignore-optional
RUN yarn add global serve
RUN yarn add global react-scripts@4.0.3 --silent --ignore-optional

CMD ["yarn", "start"]
