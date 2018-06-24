const path = require('path');
const baseConfig = require('./webpack.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './docs/src/index.js',
  output: {
    path: path.resolve('./docs'),
    filename: './dist/react-fade-opacity-docs.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: baseConfig.module,
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      filename: 'index.html',
      template: './docs/src/index.html',
    })
  ]
};
