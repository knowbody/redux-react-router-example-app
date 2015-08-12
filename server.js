/* eslint-disable */
var isDev = (process.env.NODE_ENV !== 'production');
var webpack = require('webpack');

if (!isDev) {
  var express = require('express');
  var path = require('path');
  var app = express();

  var static_path = path.join(__dirname);

  app.use(express.static(static_path))
    .get('/', function (req, res) {
      res.sendFile('./index.html', {
        root: static_path
      });
    }).listen(process.env.PORT || 8080, function (err) {
      if (err) { console.log(err) };
      console.log('Listening at localhost:8080');
    });
}


if (isDev) {
  var WebpackDevServer = require('webpack-dev-server');
  var config = require('./webpack.config');

  require('./fakeAPI');

  new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: {
      colors: true
    }
  }).listen(3000, 'localhost', function(err) {
    if (err) {
      console.log(err);
    }

    console.log('Listening at localhost:3000');
  });
}
