# Install From Package

### 1.Install yarn
```bash
npm install --global yarn
```

### 2.Run React App
#### 2.1 clone project
```bash
git clone https://github.com/patcharaponjantana/react-tutorial
cd react-tutorial/frontend
```
#### 2.2 copy ```.env.development``` files in root and place in ```./frontend``` folder
#### 2.3 start development server
```bash
yarn
yarn start
```
The app will be run on https://localhost

#### 2.4 production building
1) For building the production, copy ```.env.production``` and run build command
```sh
yarn build
```
2) start webserver. For example in python, run 
```bash
python -m http.server 80
```
The app will be run on https://localhost

### 3.Mock Server with Json Server
https://github.com/typicode/json-server
```bash
## from root layer (react-tutorial)
yarn global add json-server
cd mockserver
json-server --host 0.0.0.0 --watch db.json --port 8000
```


# Run with Docker
## 1. build image
```bash
docker build -f ./frontend/Dockerfile.development -t react-tutorial_frontend:latest ./frontend
docker build -f ./mockServer/Dockerfile -t react-tutorial_mockserver:latest ./mockServer
```
## 2. check image
```bash
docker images
```
## 3. run container
```bash
docker run -p 80:3000 -d react-tutorial_frontend:latest 
docker run -p 8000:8000 -d react-tutorial_mockserver:latest 
```
## 4. check container is running
```bash
docker container ls
```

Now the server will be run on https://localhost and https://localhost:8000

### Run with Docker Compose
docker-compose --env-file .env.dev up
docker network create internal_service