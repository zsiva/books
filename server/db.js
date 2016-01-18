var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Book = new Schema({
    book_id: String,
    title: String,
    slug: String,
    author_id : { type: Schema.Types.ObjectId, ref: 'Author' },
    bought_on: { type: Date, default: Date.now },
    category: String,
    description: String,
    format: String,
    rating: Number,
    language: String
});

var Author = Schema({
  name    : String,
  slug: String,
  books : [{ type: Schema.Types.ObjectId, ref: 'Book' }]
});

mongoose.model('Book', Book);
mongoose.model('Author', Author);
mongoose.connect('mongodb://localhost/booksApp', function(err) {
    if(err) {
        console.log('connection error', err);
    }
});
