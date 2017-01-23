/**
 * Common configuration for webpack
 * This regroups the common configuration for production and development environment.
 *
 *
 */

var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var pathTo = function (subDir) {
  return path.join(__dirname, '../' + subDir);
};
// loader + the query parameters for each loader
var cssLoaders = ['css-loader?sourceMap&modules&importLoaders=1&localIdentName=[local]&url=false',
  'postcss-loader',
  'sass-loader?sourceMap&includePaths[]=' + pathTo('src/scss')];

module.exports = {
  node: {
  fs: "empty"
  },
  entry: [
    './index.js'
  ],
  context: pathTo('./src'),
  output: {
    path: pathTo('./public'),
    filename: './index.js'
  },
 
  resolve: {
    extensions: ['.scss', '.css', '.js', '.json'],
    modules: [
      'node_modules',
      pathTo('./node_modules')
    ],
    alias: {
      webworkify: 'webworkify-webpack-dropin',
      'gl-matrix': pathTo('./node_modules/gl-matrix/dist/gl-matrix.js')
    }
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /src/,
        loader: 'source-map-loader'
      },
      { test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader' // 'babel-loader' is also a legal name to reference
      },
      {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract({fallbackLoader: 'style-loader', loader: cssLoaders.join('!')})
      }
    ],
    postLoaders: [{
      include: /node_modules\/mapbox-gl/,
      loader: 'transform-loader',
      query: 'brfs',
    }]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'styles/main.css',
      publicPath: '/styles/'
    })
  ]
};
