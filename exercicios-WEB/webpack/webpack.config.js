const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptmizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  //mode: 'development',
  mode: modoDev ? 'development' : 'production',
  entry: './src/principal.js',
  output: {
    //cria uma outra pasta de saída <> dist
    filename: 'principal.js', //cria outro arquivo <> main.js
    path: __dirname + '/public' //coloca o arquivo principal.js na pasta public
  },
  devServer: {
    contentBase: './public',
    port: 9000
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true
      }),
      new OptmizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'estilo.css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/, //expressão regular para css https://regex101.com/
        test: /\.s?[ac]ss$/, //expressão regular para acss
        use: [
          MiniCssExtractPlugin.loader, //conflita com o style-loader
          // 'style-loader', //Adiciona css a DOM injetando a tag <style>
          'css-loader', //interpreta @import, url()...
          'sass-loader'
        ]
      },
      { test: /\.(png|svg|jpg|gif)$/, use: ['file-loader'] }
    ]
  }
}
