var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Book = new Schema({
    book_id: String,
    title: String,
    author_id : { type: Schema.Types.ObjectId, ref: 'Author' },
    bought_on: Date,
    category: String,
    description: String,
    format: String,
    rating: Number
});

var Author = Schema({
  name    : String,
  books : [{ type: Schema.Types.ObjectId, ref: 'Book' }]
});

mongoose.model('Book', Book);
mongoose.model('Author', Author);
mongoose.connect('mongodb://localhost/booksApp');
