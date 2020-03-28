const { HotModuleReplacementPlugin } = require('webpack');
const { resolve } = require('path');

module.exports = {
  target: 'node',
  mode: 'development',

  entry: {
    server: './src/server/index.ts'
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },

  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        use: {
          loader: 'babel-loader',
          options: {
            // cacheDirectory: true
          }
        },
        // exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new HotModuleReplacementPlugin()
  ],

  devtool: 'cheap-module-eval-source-map'
};
