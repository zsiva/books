var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Book = new Schema({
    book_id: String,
    title: String,
    author: String,
    bought_on: Date
});

mongoose.model('Book', Book);
mongoose.connect('mongodb://localhost/booksApp');

