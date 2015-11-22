var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Book = mongoose.model('Book');

router.get('/api/books', function (req, res) {
    Book.find({}, function (err, books) {
        if (err) throw err;
        res.status(200).json(books);
    });
});

router.post('/api/createbook', function(req, res) {
    new Book(req.body).save();
    res.status(200).json(req.body);
});

module.exports = router;
