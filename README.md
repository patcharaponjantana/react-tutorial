# Install From Package

### 1.Install yarn
```bash
npm install --global yarn
```

### 2.Create React App
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