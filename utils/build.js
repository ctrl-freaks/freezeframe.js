const webpack = require('webpack');
const config = require('../webpack.config');

delete config.notHotReload;

webpack(config, (err) => {
  if (err) {
    throw err;
  }
});
