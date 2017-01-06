## install npm packages
`npm install --registry=https://registry.npm.taobao.org`

## browserify/watchify
`./node_modules/.bin/watchify tests/input/entry.js -o tests/output/browserified/entry.js -v`

## webpack
`./node_modules/.bin/webpack --watch`

## webpack-dev-server
`./node_modules/.bin/webpack-dev-server --content-base tests/output/webpack/ --hot --inline`
then visite http://127.0.0.1:8080/test-webpack-dev-server.html

## es2015 and rollup
`./node_modules/.bin/rollup -f es tests/input/es2015/main.js -o tests/output/es2015/main.js`