const { join } = require('path');
const merge = require('webpack-merge');
const { WatchIgnorePlugin, HotModuleReplacementPlugin } = require('webpack');

const common = require('./webpack.common');

module.exports = merge.smart(common, {
  mode: 'development',

  entry: {
    main: [
      'react-hot-loader/patch',
      './src/index.tsx'
    ],
    styles: './src/styles/styles.css',
    'hc-default': './src/styles/highcharts.css',
    'hc-dark': './src/styles/highcharts-dark.css'
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
      }
    ]
  },

  plugins: [
    new WatchIgnorePlugin([ /\.js$/ ]),
    new HotModuleReplacementPlugin()
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
