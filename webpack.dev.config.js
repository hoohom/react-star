/**
 * Copyright(c) 2015 Gxmari007 <392041299@qq.com>
 */

var path = require('path');

module.exports = {

  entry: [
    // 'webpack/hot/dev-server',
    path.resolve(__dirname, 'example/index.jsx')
  ],

  output: {
    path: path.resolve(__dirname, 'example'),
    filename: 'index.js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      },
      {
        test: /\.less$/,
        loader: 'style!css!less!autoprefixer?browsers=last 2 versions'
      }
    ]
  }

};
