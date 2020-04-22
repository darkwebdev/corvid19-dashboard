const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackExcludeAssetsPlugin = require('html-webpack-exclude-assets-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const common = require('./webpack.common.js');

module.exports = merge.smart(common, {
  mode: 'production',

  entry: {
    main: './src/index.tsx',
    'hc-light': './src/highcharts-light.css',
    'hc-dark': './src/highcharts-dark.css'
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
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
    new HtmlWebpackPlugin({
      template: './src/index.html',
      excludeAssets: [/hc-light/, /hc-dark/],
      hash: true
    }),
    new HtmlWebpackExcludeAssetsPlugin(),
    new MiniCssExtractPlugin(),
    process.env.WEBPACK_BUNDLE_ANALYSER ? new BundleAnalyzerPlugin() : () => {}
  ]
});
