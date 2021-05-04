var express = require('express');
var webpack = requiere('webpack');
var webpackDevMiddleware = require('webpack-dev-midd');
var webpackConfig = require('/webpack.config');

var app = express();
app.set('port',(process.env.PORT || 3000));
app.set('/static',express.static('dist'));
app.set(webpackDevMiddleware(webpack(webpackConfig)));