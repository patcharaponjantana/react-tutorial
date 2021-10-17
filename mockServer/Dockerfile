FROM node:15.0-alpine

WORKDIR /code

RUN npm install -g json-server

ADD . /code

CMD ["sh", "run.sh"]