var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Book = mongoose.model('Book');
var Author = mongoose.model('Author');

router.get('/api/books/:book_slug?', (req, res) => {
    var searchQuery = {};
    if (req.params.book_slug) {
      searchQuery = {slug: req.params.book_slug};
    }
    Book
    .find(searchQuery)
    .populate('author_id', 'name')
    .exec((err, books) => {
        if (err) throw err;
        res.status(200).json(books)
    });
});

router.post('/api/createbook', (req, res) => {
    var book = new Book(req.body);
    book.save();
    res.send(book);
});

router.put('/api/updatebook/:book_id', (req, res) => {
  Book.findOneAndUpdate({_id: req.params.book_id}, req.body, () => res.send(req.body));
});

router.delete('/api/deletebook/:book_id', (req, res) => {
    Book.findOneAndRemove({ _id: req.params.book_id }, function(err, books) {
        if (err) throw err;
        res.send(books);
    });
});

router.get('/api/authors/:author_slug?', (req, res) => {
      var searchQuery = {};
      if (req.params.author_slug) {
        searchQuery = {slug: req.params.author_slug};
      }

     Author.find(searchQuery)
         .populate('books_id', 'title category')
         .exec( (err, authors) => {
           if (err) throw err;
           res.status(200).json(authors);
         });
});

router.post('/api/createauthor', (req, res) => {
    var author = new Author(req.body);
    author.save();
    res.send(author);
});

router.delete('/api/deleteauthor/:author_id', (req, res) => {
    Author.findOneAndRemove({ _id: req.params.author_id }, function(err, authors) {
        if (err) throw err;
        res.send(authors);
    });
});

router.put('/api/updateauthor/:author_id', (req, res) => {
    console.log(req.body);
  Author.findOneAndUpdate({_id: req.params.author_id}, req.body, () => res.send(req.body));
});

module.exports = router;
