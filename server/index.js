var express = require('express');
var path = require('path');
var app = express();
// mongoose setup
require( './db' );
var routes = require('./routes');

var baseHtml = path.join(__dirname, '../frontend/index.html');

app.use('/build', express.static(path.join(__dirname, '../frontend/build')));

app.use('/', routes);

app.get('/*', function (req, res) {
    res.sendFile(baseHtml);
});

app.listen(3000);
