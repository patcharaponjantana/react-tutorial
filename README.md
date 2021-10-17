# Install From Package

### 1.Install yarn
```bash
npm install --global yarn
```

### 2.Run React App
```bash
git clone https://github.com/patcharaponjantana/react-tutorial
cd react-tutorial/frontend
yarn
yarn start
```

### 3.Mock Server with Json Server
https://github.com/typicode/json-server
```bash
## from root layer (react-tutorial)
yarn global add json-server
cd mockserver
json-server --host 0.0.0.0 --watch db.json --port 8000
```


### Run with Docker

```
docker build . -t <your username>/node-web-app
docker images # check your image is exist
docker run -p 8100:8080 -d <your username>/node-web-app
docker ps # check your container is exist
docker logs <container id> # check logs
docker exec -it <container id> bash # for debuging
```


```
curl -i localhost:8100
```

### Run with Docker Compose
docker-compose --env-file .env.dev up
docker network create internal_service