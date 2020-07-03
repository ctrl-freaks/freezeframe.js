#!/usr/bin/env bash

rm -f ../../docs/index.html
rm -f ../../docs/freezeframe.min.js

cp ./dist/index.html ../../docs/index.html
cp ./dist/freezeframe.min.js ../../docs/freezeframe.min.js
