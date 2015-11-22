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

module.exports = router;
