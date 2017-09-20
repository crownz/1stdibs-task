const express = require('express');
const webpack = require('webpack');
const path = require('path');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('../webpack.config.js');

const compiler = webpack(config);
const app = express();
const port = process.env.PORT || 3001;

app.use(webpackDevMiddleware(compiler, { publicPath: config.output.publicPath }));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use('/api', require('./items-api'));
app.use('/node_modules', express.static(path.join(__dirname, '..', 'node_modules')));
app.use('/browse', require('./routes/browseRouter'));

const server = app.listen(port, function () {
    console.log('Example app listening at localhost:%s', port);
});