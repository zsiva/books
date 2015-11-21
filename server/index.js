var express = require('express');
var path = require('path');
var app = express();

var baseHtml = path.join(__dirname, '../frontend/index.html');
var books = [
    {
        title: 'Test1',
        author: 'Author1'
    },
    {
        title: 'Test2',
        author: 'Author2'
    }
];

app.use('/build', express.static(path.join(__dirname, '../frontend/build')));

app.get('/api/books', function (req, res) {
   res.status(200).json(books);
});

app.get('/*', function (req, res) {
    res.sendFile(baseHtml);
});

app.listen(3000);
