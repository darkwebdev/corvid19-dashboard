import express from 'express';
import webpack, { Configuration } from 'webpack';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotServerMiddleware from 'webpack-hot-server-middleware';

import webpackConfig from '../../webpack.config.js';
import webpackServerConfig from '../../webpack.server.config.js';
import homePage from '../pages/home';

const compiler = webpack([
  { ...webpackConfig, name: 'client' },
  { ...webpackServerConfig, name: 'server' }
] as Configuration[]);

const clientCompiler = compiler.compilers.find(compiler => compiler.name === 'client');

express()
  .use(express.static('dist'))
  .use(webpackDevMiddleware(compiler, {
    publicPath: '/dist',
    serverSideRender: true,
    watchOptions: {
      poll: true,
      ignored: /node_modules/
    },
    stats: {
      colors: true
    }
  }))
  .use(webpackHotMiddleware(clientCompiler!))
  .use(webpackHotServerMiddleware(compiler))
  .get('/', homePage)
  .listen(8080, err => {
    if (err) console.log(err);
    else console.log('Application listening on port 8080...');
  });
