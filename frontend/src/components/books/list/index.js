module.exports = angular.module('books.list.bookListController', [
    require('services/book-service').name,
    require('components/books/bookCreate').name,
    require('components/books/edit').name
    ])
    .controller('bookListController', bookListController);

function bookListController (bookService, $scope, modalService) {
    const vm = this;

    vm.hidden = true;
    vm.booksList = bookService.getBooksList();

    vm.sortType     = 'title';
    vm.sortReverse  = false;

    vm.deleteBook = function(id) {
      var modalOptions = {
          closeButtonText: 'Cancel',
          actionButtonText: ' Delete',
          headerText: 'Delete book',
          bodyText: 'Are you sure you want to delete it?',
          displayAction: true,
          actionClass: 'btn-danger fa fa-trash'
      };
      modalService.showModal(modalOptions).then(function (modalScope) {
        bookService.deleteBook(id);
      });
    };
}
