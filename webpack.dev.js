const { WatchIgnorePlugin, HotModuleReplacementPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackExcludeAssetsPlugin = require('html-webpack-exclude-assets-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const merge = require('webpack-merge');
const { join } = require('path');

const common = require('./webpack.common');

module.exports = merge.smart(common, {
  mode: 'development',

  entry: {
    main: [
      'react-hot-loader/patch',
      './src/index.tsx'
    ],
    'hc-light': './src/highcharts-light.css',
    'hc-dark': './src/highcharts-dark.css'
  },

  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          experimentalFileCaching: true,
          transpileOnly: true
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },

  plugins: [
    new WatchIgnorePlugin([ /\.js$/ ]),
    new HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      chunks: ['react', 'main', 'highcharts'],
      excludeAssets: [/hc-light/, /hc-dark/],
      hash: false
    }),
    new HtmlWebpackExcludeAssetsPlugin(),
    new MiniCssExtractPlugin()
  ],

  devServer: {
    host: '0.0.0.0',
    port: 8080,
    hot: true,
    open: true,
    openPage: 'covid19-dashboard',
    contentBase: join(__dirname, 'docs'),
    // watchContentBase: true,
    historyApiFallback: true,
    watchOptions: {
      ignored: ['node_modules', 'docs']
    }
  },

  devtool: 'cheap-module-eval-source-map'
});
