#!/usr/bin/env bash

rm ../../docs/index.html
rm ../../docs/freezeframe.min.js

cp ./dist/index.html ../../docs/index.html
cp ./dist/freezeframe.min.js ../../docs/freezeframe.min.js
