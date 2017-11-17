const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

const assets = require('./assets');

module.exports = {
  entry: {
    app: "./src/app.js"
  },
  output: {
    path: __dirname + '/public/js',
    filename: '[name].bundle.js'
  },
  plugins: [
    new CopyWebpackPlugin(
      assets.map(asset => {
        return {
          from: path.resolve(__dirname, `./node_modules/${asset}`),
          to: path.resolve(__dirname, './public/libs')
        }
      })
    )
  ]
};
