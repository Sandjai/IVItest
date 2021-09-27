const webpack = require('webpack')
const { merge } = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const path = require('path')

const devWebpackConfig = merge(baseWebpackConfig, {
  // DEV settings gonna be here
  mode: 'development',
  
   // Source map
   devtool: 'cheap-module-eval-source-map',

   output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './../dist'),
    publicPath: '/dist/'
  },

   plugins: [
     new webpack.SourceMapDevToolPlugin({
       filename: "[file].map"
     }),
   ],
  devServer: {
    // historyApiFallback: true,
    // noInfo: true,
    port: 8081,
    
    overlay: {
      warnings: true,
      errors: true
    }    
  }
})

// export devWebpackConfig
module.exports = new Promise((resolve, reject) => {
    resolve(devWebpackConfig)
   })