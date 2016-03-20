var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var Book = new Schema({
    book_id: String,
    title: String,
    author: String,
    bought_on: Date
});

mongoose.model('Book', Book);

var Author = new Schema({
    name: String,
    books: [{ type : ObjectId, ref: 'Book' }]
});

mongoose.model('Author', Author);
module.exports = {
    Book: Book,
    Author: Author
};


