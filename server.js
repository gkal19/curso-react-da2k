'use strict'

const webpack = require('webpack'),
      WebpackDevServer = require('webpack-dev-server'),
      config = require('./webpack.config')

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true
  }
}).listen(3000, (err) => {
  if (err) {
    console.log(err);
  }
  else {
    console.log('Servidor rodando na porta 3000');
  }
})
