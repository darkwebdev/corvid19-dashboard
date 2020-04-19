const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const common = require('./webpack.common.js');

module.exports = merge.smart(common, {
  mode: 'production',

  entry: [
    './src/index.tsx'
  ],

  output: {
    publicPath: '/covid19-dashboard'
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },

  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      chunks: ['react', 'main'],
      hash: true
    }),
    process.env.WEBPACK_BUNDLE_ANALYSER ? new BundleAnalyzerPlugin() : () => {}
  ]
});
