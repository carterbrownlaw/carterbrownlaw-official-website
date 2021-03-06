const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    index: './src/pages/landing/index.js',
    about: './src/pages/about/about.js',
    contact: './src/pages/contact/contact.js',
    services: './src/pages/services/services.js',
    testimonials: './src/pages/testimonials/testimonials.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 8080
  },
  // output: {
  //   filename: 'main.js',
  //   path: path.resolve(__dirname, 'dist')
  // },
  module: {
    rules: [
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "fonts/[name].[ext]"
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // 'style-loader',
          { 
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV == 'development',
            }
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpe?g)$/i,
        use: {
          loader: "file-loader",
          options: {
            name: "images/[name].[ext]"
          },
        }
      },
      {
        test:/_\w+\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              interpolate: true,
              minimize: true
            }
          }
        ]
      },

      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/pages/landing/index.html',
      templateParameters: {
        carter_brown_info: require('./src/assets/content/carter_brown_info.json')
      },
      inject: true,
      chunks: ['index'],
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/about/about.html',
      inject: true,
      chunks: ['about'],
      filename: 'about.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/contact/contact.html',
      templateParameters: {
        carter_brown_info: require('./src/assets/content/carter_brown_info.json')
      },
      inject: true,
      chunks: ['contact'],
      filename: 'contact.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/services/services.html',
      inject: true,
      chunks: ['services'],
      filename: 'services.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/testimonials/testimonials.html',
      inject: true,
      chunks: ['testimonials'],
      filename: 'testimonials.html'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    })
  ]
};
