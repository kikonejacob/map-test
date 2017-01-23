
/**
 *  Webpack Additional configuration for development bundling
 *  The main addition is adding the hot module replacement for development server
 */
var webpack = require('webpack');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:9000/'
  ],
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new OpenBrowserPlugin({ url: 'http://localhost:9000' })
  ]
};
