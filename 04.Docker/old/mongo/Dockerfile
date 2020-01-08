FROM mongo:latest

WORKDIR /usr/src
RUN mkdir mongo_config
WORKDIR /usr/src/mongo_config

COPY replcaset_setting.js .

CMD ["mongo", "mongodb://mongo1:27017", "./replcaset_setting.js"]