const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    entry: './src',
    mode: 'production',
    devtool: 'inline-source-map',

    module: {
      rules: [
        {
          test: /\.html$/i,
          use: "html-loader"
        },
        {
          // adding styles for demo page
          test: /(demo-style|foundation)\.css$/,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'assets/img/[name][ext]'
          }
        },
        {
          test: /\.(woff(2)?|eot|ttf|otf)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'assets/font/[name][ext]'
          }
        }
      ],
    },
  
    plugins: [
      new HtmlWebpackPlugin({
        title: 'fusely UI Kit',
        favicon: './src/favicon.png',
        template: './src/demo.html',
        filename: 'index.html',
      }),
    ],
  });