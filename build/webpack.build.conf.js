const { merge } = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const path = require('path')

const buildWebpackConfig = merge(baseWebpackConfig, {
  // BUILD settings gonna be here
  mode: 'production',

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './../dist'),
    publicPath: '/IVItest/dist/'
  },

  plugins: []
});

// export buildWebpackConfig
module.exports = new Promise((resolve, reject) => {
  resolve(buildWebpackConfig)
})