FROM node:15.0-alpine

WORKDIR /code

RUN npm install -g json-server

ADD . /code

# CMD [ "json-server ", "--host", "0.0.0.0", "--watch", "db.json", "--port", "8000" ]
# CMD echo "json-server --host 0.0.0.0 --watch db.json --port 8000"

CMD ["sh", "run.sh"]