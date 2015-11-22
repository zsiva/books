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

router.put('/api/updatebook/:book_id', function(req, res) {
    Book.findOneAndUpdate({_id: req.params.book_id}, req.body, function (err, book) {
        res.send(book);
    });
});

router.delete('/api/deletebook/:book_id', function(req, res) {
    Book.findOneAndRemove({ _id: req.params.book_id }, function(err, books) {
        if (err) throw err;
        res.send(books);
    });
});

module.exports = router;
