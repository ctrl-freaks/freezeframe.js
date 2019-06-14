const webpack = require('webpack');
const config = require('../webpack.config');

delete config.notHotReload;

process.env.NODE_ENV = 'production';

webpack(config, (err) => {
  if (err) {
    throw err;
  }
});
