### Run with Docker

```
docker build . -t <your username>/node-web-app
docker images # check your image is exist
docker run -p 8100:8080 -d <your username>/node-web-app
docker ps # check your container is exist
docker logs <container id> # check logs
docker exec -it <container id> bash # for debuging
```