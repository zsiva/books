module.exports = angular.module('books.bookService', []).service('bookService', bookService);

function bookService($http) {
    var books = [];

    this.initBooks = function (newbooks) {
        books = newbooks;
    };

    this.booksList = function () {
        return books;
    };

    this.addBook = function (newBook) {
        books.push(newBook);
        $http.post('/api/createbook/', newBook);
    };

    this.updateBook = function (newBook) {
        $http.put('/api/updatebook/' + newBook._id, newBook);
    };

    this.deleteBook = function (bookId) {
        $http.delete('/api/deletebook/' + bookId)
            .success(function(data) {
                console.log('deleting', bookId);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    }

}
