/**
 * Copyright(c) 2015 Gxmari007 <392041299@qq.com>
 */

var path = require('path');
var webpack = require('webpack');

module.exports = {

  entry: path.resolve(__dirname, 'src/index.jsx'),

  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.min.js',
    libraryTarget: 'umd',
    library: 'react-star'
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  externals: {
    react: {
      root: 'React',
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react'
    }
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
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]

};
