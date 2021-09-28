require('babel-polyfill');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: {
    app:  ['babel-polyfill', './components/app/app.js']
  },

 
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: '/node_modules/'
    }, 

  

    {
      test: /\.css$/,
      use: [
        'style-loader',
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: { sourceMap: true }
        }, {
          loader: 'postcss-loader',
          options: { sourceMap: true, config: { path: 'postcss.config.js' } }
        }
      ]
    },
    {
        loader: 'postcss-loader',
        options: {
            plugins: [
                autoprefixer({
                    browsers:['ie >= 8', 'last 4 version']
                })
            ],
            sourceMap: true
        }
    },
    {
      test: /\.s[ac]ss$/i,
      use: [
          "style-loader", // creates style nodes from JS strings
          MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: { sourceMap: true }
      }, {
        loader: 'postcss-loader',
        options: { sourceMap: true, config: { path: 'postcss.config.js' } }
      },{
          loader: "sass-loader", // compiles Sass to CSS
          options: { sourceMap: true }
      }]
    },
    


    {
      test: /\.pug$/,
      loader: 'pug-loader'
    },
    

    {
      test: /\.(png|jpe?g|gif|svg)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
          },
        },
      ],
    },


    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ],  
  devServer: {
      overlay: true
  },
  


}
