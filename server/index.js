var express = require('express');
var path = require('path');
var app = express();
// mongoose setup
require( './db' );
var routes = require('./routes');

var baseHtml = path.join(__dirname, '../frontend/index.html');

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


app.use('/build', express.static(path.join(__dirname, '../frontend/build')));

app.use('/src/styles',express.static(path.join(__dirname, '../frontend/src/styles')));

app.use('/', routes);

app.get('/*', function (req, res) {
    res.sendFile(baseHtml);
});


app.listen(3000);
