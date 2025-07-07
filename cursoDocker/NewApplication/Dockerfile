FROM node:lts-alpine
WORKDIR /app
# RUN addgroup dev && adduser -S -G dev dev
# USER dev
COPY . .
RUN apk add --no-cache python3 g++ make
RUN yarn install --production
CMD [ "node","src/index.js" ]
EXPOSE 3000
