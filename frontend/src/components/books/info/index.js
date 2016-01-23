import STATES from '../../../constants/states';

module.exports = angular.module('books.bookInfoController', [])
    .controller('bookInfoController', bookInfoController);

function bookInfoController(bookData, bookService, $state) {
    const vm = this;
    vm.editorEnabled = false;
    vm.bookData = bookData;

    vm.saveBook = function () {
      bookService.updateBook(vm.bookData);
      $state.go(STATES.BOOKS_LIST);
    }
}
