var webpack = require('webpack');

/**
 * Production Webpack configuration
 *
 * We are using plugins to optimize the output file
 */
module.exports = {
  devtool: 'source-map',
  output: {
    filename: 'js/App.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    // new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(), // OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};
