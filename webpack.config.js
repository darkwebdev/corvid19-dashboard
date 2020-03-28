const { HotModuleReplacementPlugin } = require('webpack');
const { join } = require('path');

module.exports = {
  target: 'web',
  mode: 'development',

  entry: {
    home: [
      'react-hot-loader/patch',
      'webpack-hot-middleware/client',
      './pages/home/browser.tsx'
    ]
  },
  // watch: true,

  context: join(__dirname, '../src'),

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },

  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
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
