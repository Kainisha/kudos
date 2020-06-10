const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: [
        "@babel/polyfill",
        './src/index.js'
    ],
    output: {
        path: path.resolve(__dirname, 'public', 'assets'),
        filename: '[name].js'
    },
    name: 'client',
    target: 'web',
    devtool: 'source-map',
    mode: 'development',
    resolve: {
      extensions: ['.Webpack.js', '.web.js', '.ts', '.js', '.jsx', '.tsx']
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react"
              ]
            }
          }
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]?[hash]'
          }
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader"
            }
          ]
        }
      ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
          title: 'Kudos',
          filename: './index.html',
          template: './src/index.html',
          inject: 'body'
      }),
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
          root: __dirname,
          src: path.resolve(__dirname, 'src/'),
        },
    },
};
