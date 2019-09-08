const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    'index/index': './src/pages/landing/index.js',
    'about/about': './src/pages/about/about.js',
    'contact/contact': './src/pages/contact/contact.js',
    'services/services': './src/pages/services/services.js',
    'testimonials/testimonials': './src/pages/testimonials/testimonials.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    // historyApiFallback: {
    //   logger: console.log.bind(console),
    //   rewrites: [
    //     // { from: /\/about/, to: function(context) { return context.parsedUrl.pathname + '/about.html' } }
    //     { from: /\/about/, to: '/about.html' }
    //   ]
    // },
    port: 8080
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "assets/fonts/[name].[ext]"
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
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
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/images'
            }
          }
        ],
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
      inject: true,
      chunks: ['index/index'],
      filename: 'index/index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/about/about.html',
      inject: true,
      chunks: ['about/about'],
      filename: 'about/index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/contact/contact.html',
      templateParameters: {
        carter_brown_info: require('./src/assets/content/carter_brown_info.json')
      },
      inject: true,
      chunks: ['contact/contact'],
      filename: 'contact/index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/services/services.html',
      inject: true,
      chunks: ['services/services'],
      filename: 'services/index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/testimonials/testimonials.html',
      inject: true,
      chunks: ['testimonials/testimonials'],
      filename: 'testimonials/index.html'
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
