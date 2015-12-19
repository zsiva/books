module.exports = angular.module('books.bookService', []).service('bookService', bookService);

function bookService($http) {
    var books = [];

    this.initBooks = function (newbooks) {
        books = newbooks;
    };

    this.booksList = function () {
        return books;
    };

    //TODO: validate fields
    this.addBook = function (newBook) {
        $http.post('/api/createbook/', newBook).success(function(book) {
            books.push(book);
        });
    };

    this.updateBook = function (newBook) {
        $http.put('/api/updatebook/' + newBook._id, newBook)
          .then(res => {
            const updatedBook = res.data;
            const index = _.findIndex(books, '_id', updatedBook._id);
            books.splice(index, 1, updatedBook);
          });
    };

    this.deleteBook = function (bookId) {
        $http.delete('/api/deletebook/' + bookId)
            .success(function() {
                var pos = books.map(function(book) { return book._id; })
                    .indexOf(bookId);
                books.splice(pos, 1);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    }

}
