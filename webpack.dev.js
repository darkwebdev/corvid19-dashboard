const { WatchIgnorePlugin, HotModuleReplacementPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

const common = require('./webpack.common');

module.exports = merge.smart(common, {
  mode: 'development',

  entry: [
    'react-hot-loader/patch',
    './src/index.tsx'
  ],

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
      }
    ]
  },

  plugins: [
    new WatchIgnorePlugin([ /\.js$/ ]),
    new HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      chunks: ['react', 'main'],
      hash: false
    })
  ],

  devServer: {
    host: '0.0.0.0',
    port: 8080,
    hot: true,
    open: true,
    contentBase: 'docs',
    historyApiFallback: true,
    watchOptions: {
      ignored: ['node_modules', 'docs']
    }
  },

  devtool: 'cheap-module-eval-source-map'
});
