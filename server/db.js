var mongoose = require('mongoose'),
    slug = require('mongoose-slug'),
    Schema = mongoose.Schema;

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

Book.plugin(slug('title'));

var Author = Schema({
    name: String,
    slug: String,
    books: [{ type: Schema.Types.ObjectId, ref: 'Book' }]
});

Author.plugin(slug('name'));

mongoose.model('Book', Book);
mongoose.model('Author', Author);
mongoose.connect('mongodb://localhost/booksApp', function(err) {
    if(err) {
        console.log('connection error', err);
    }
});
