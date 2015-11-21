module.exports = angular.module('books.list.bookListController', [
    require('services/book-service').name,
    require('components/createBook').name
    ])
    .controller('bookListController', bookListController);

function bookListController (bookService) {
    const vm = this;

    vm.booksList = bookService.booksList();
}
