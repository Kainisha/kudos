const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
      extensions: ['.js', '.jsx', '.scss', '.css'],
      alias: {
        root: path.resolve(__dirname, 'src/'),
        src: path.resolve(__dirname, 'src/'),
        views: path.resolve(__dirname, 'src/views/'),
        Layout: path.resolve(__dirname, 'src/components/layout/')
      },
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
        },
        {
          test: /\.scss$/,
          use: [ 'style-loader',
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                url: false,
              },
            },
            'sass-loader'
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
      new MiniCssExtractPlugin({
        filename: 'style.bundle.css',
      })
    ]
};
