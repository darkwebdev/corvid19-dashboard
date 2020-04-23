const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const common = require('./webpack.common.js');

module.exports = merge.smart(common, {
  mode: 'production',

  entry: {
    main: './src/index.tsx',
    styles: './src/styles/styles.css',
    'hc-default': './src/styles/highcharts.css',
    'hc-dark': './src/styles/highcharts-dark.css'
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
    minimizer: [
      new TerserPlugin(),
      new OptimizeCSSAssetsPlugin()
    ]
  },

  plugins: [
    process.env.WEBPACK_BUNDLE_ANALYSER ? new BundleAnalyzerPlugin() : () => {}
  ]
});
