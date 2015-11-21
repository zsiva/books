module.exports = angular.module('book.bookService', []).service('bookService', bookService);

function bookService() {
    var books = [];

    this.initBooks = function (newbooks) {
        books = newbooks;
    };

    this.booksList = function () {
        return books;
    };

    this.addBook = function (newBook) {
        books.push(newBook);
    };
}
