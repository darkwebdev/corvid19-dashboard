import { HotModuleReplacementPlugin } from 'webpack';

export default {
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
        test: /\.tsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        },
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new HotModuleReplacementPlugin()
  ],

  devtool: 'cheap-module-eval-source-map'
};
