var merge = require('webpack-merge');
var common = require('./config/webpack.config.common');
var production = require('./config/webpack.config.prod');
var dev = require('./config/webpack.config.dev');

module.exports = function (env = 'developnent') {
  if (env === 'production') {
    return merge(common, production);
  } else {
    return merge(common, dev);
  }
};
