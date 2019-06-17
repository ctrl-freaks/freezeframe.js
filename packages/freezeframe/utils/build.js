process.env.NODE_ENV = 'production';

const webpack = require('webpack');
const config = require('../webpack.config');

webpack(config, (err) => {
  if (err) {
    throw err;
  }
});
