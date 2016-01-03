module.exports = angular.module('books.bookInfoController', [])
    .controller('bookInfoController', bookInfoController);

function bookInfoController(bookData) {
    const vm = this;
    vm.bookData = bookData;
}
