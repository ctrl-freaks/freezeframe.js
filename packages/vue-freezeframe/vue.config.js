module.exports = {
  publicPath: '/freezeframe.js/',
  configureWebpack: {
    externals: {
      freezeframe: 'freezeframe',
    },
  },
};
