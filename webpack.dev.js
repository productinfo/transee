const merge = require('webpack-merge')
const config = require('./webpack.config')

module.exports = merge(config, {

  devtool: 'source-map',

  devServer: {
    contentBase: './app/renderer',
    publicPath: 'http://localhost:8182/build/'
  },

})
