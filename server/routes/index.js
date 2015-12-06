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
    var book = new Book(req.body);
    book.save();
    res.send(book);
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

router.get('/api/authors', function (req, res) {
  var authors = [
      {
         "name": "Paolo Coelho"
      },
      {
          "name": "Helene Gremillon"
      },
      {
          "name": "Sarah Lark"
      },
      {
        "name": "Markus Zusak"
      },
      {
        "name": "Almudena de Arteaga"
      }];
    res.json(authors);
});


module.exports = router;
