#!/usr/bin/env bash

vue-cli-service build --dest demo

rm ../../docs/vue.html
rm -rf ../../docs/js
rm -rf ../../docs/css

cp ./demo/index.html ../../docs/vue.html
cp -rf ./demo/js ../../docs/js
cp -rf ./demo/css ../../docs/css
