const HtmlWebpackPlugin = require('html-webpack-plugin');
const { WatchIgnorePlugin } = require('webpack');

module.exports = {
  mode: 'development',

  entry: [
    'react-hot-loader/patch',
    './src/index.tsx'
  ],

  optimization: {
    splitChunks: {
      cacheGroups: {
        react: {
          test: /node_modules\/react/,
          name: 'react',
          chunks: 'all',
          reuseExistingChunk: true
        },
        highcharts: {
          test: /node_modules\/highcharts/,
          name: 'highcharts',
          chunks: 'all',
          reuseExistingChunk: true
        }
      }
    }
  },

  resolve: {
    extensions: [ '.ts', '.tsx', '.js' ],
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
    new WatchIgnorePlugin([
      /\.js$/,
      /\.d\.ts$/
    ]),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      chunks: ['react', 'highcharts', 'main'],
      hash: false
    })
  ],

  devServer: {
    port: 8080,
    hot: true,
    open: true,
    contentBase: 'dist',
    watchOptions: {
      ignored: ['node_modules', 'dist']
    }
  }
};
