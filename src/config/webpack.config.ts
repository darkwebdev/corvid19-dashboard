import { HotModuleReplacementPlugin } from 'webpack';
import { resolve } from 'path';

export default {
  target: 'web',
  mode: 'development',

  entry: {
    home: [
      'react-hot-loader/patch',
      'webpack-hot-middleware/client',
      resolve(__dirname, '../pages/home/browser.tsx')
    ]
  },
  // watch: true,

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },

  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  },

  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        use: {
          loader: 'babel-loader',
          options: {
            // cacheDirectory: true,
            "presets": [
              "@babel/preset-env",
              "@babel/preset-typescript",
              "@babel/preset-react"
            ],
            "plugins": [
              "react-hot-loader/babel"
            ]
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
