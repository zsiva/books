var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Book = mongoose.model('Book');
var Author = mongoose.model('Author');

router.get('/api/books/:book_id?', function (req, res) {
    var searchQuery = {};
    if (req.params.book_id) {
      searchQuery = {_id: req.params.book_id};
    }
    Book
    .find(searchQuery)
    .populate('author_id', 'name')
    .exec(function (err, books) {
      if (err) throw err;
      res.status(200).json(books);
    });
});

router.get('/api/authorbooks/:author_id?', function (req, res) {
    var searchQuery = {};
    if (req.params.author_id) {
      searchQuery = {author_id: req.params.author_id};
    }
    Book
    .find(searchQuery)
    .populate('author_id', 'name')
    .exec(function (err, books) {
      if (err) throw err;
      res.status(200).json(books);
    });
});

router.post('/api/createbook', function(req, res) {
    console.log('book: ', req.body);
    var book = new Book(req.body);
    book.save();
    res.send(book);
});

router.put('/api/updatebook/:book_id', function(req, res) {
  Book.findOneAndUpdate({_id: req.params.book_id}, req.body, function () {
        res.send(req.body);
    });
});

router.delete('/api/deletebook/:book_id', function(req, res) {
    Book.findOneAndRemove({ _id: req.params.book_id }, function(err, books) {
        if (err) throw err;
        res.send(books);
    });
});

router.get('/api/authors/:author_id?', function (req, res) {
      var searchQuery = {};
      if (req.params.author_id) {
        searchQuery = {_id: req.params.author_id};
      }
      Author.find(searchQuery, function (err, authors) {
          if (err) throw err;
          res.status(200).json(authors);
      });
});

router.post('/api/createauthor', function(req, res) {
    var author = new Author(req.body);
    author.save();
    res.send(author);
});

router.delete('/api/deleteauthor/:author_id', function(req, res) {
    Author.findOneAndRemove({ _id: req.params.author_id }, function(err, authors) {
        if (err) throw err;
        res.send(authors);
    });
});

module.exports = router;
