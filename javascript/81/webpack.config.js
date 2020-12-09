const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    rpsGame: './src/rpsGame.js',
    rock: './src/rock.js',
    paper: './src/paper.js',
    scissors: './src/scissors.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  target: 'web',
  devtool: 'inline-source-map', //this is for development stage //see source maps
  //devtool: 'source-map', //this is for user stage 
  devServer: {
    contentBase: './dist',
    //hot: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Rock Paper Scissors Game',
      template: './src/rpsGame.html'
    }),
    new ESLintPlugin(),
    new webpack.BannerPlugin('copyright PCS hw81 2020')
  ],
};