module.exports = angular.module('books.bookService', []).service('bookService', bookService);

function bookService($http) {
    let books = [];

    this.initBooks = (newbooks) => books = newbooks;

    this.getBooksList = () => books;

    //TODO: validate fields
    this.addBook = (newBook) => {
        $http.post('/api/createbook/', newBook).success(function(book) {
            books.push(book);
        });
    };

    this.updateBook = (newBook) => {
        $http.put('/api/updatebook/' + newBook._id, newBook)
          .then(res => {
            const updatedBook = res.data;
            const index = _.findIndex(books, '_id', updatedBook._id);
            books.splice(index, 1, updatedBook);
          });
    };

    this.deleteBook = (bookId) => {
        $http.delete('/api/deletebook/' + bookId)
            .success(function() {
                let pos = books.map((book) => book._id).indexOf(bookId);
                books.splice(pos, 1);
            })
            .error( (data) => console.log('Error: ' + data));

    }

}
