module.exports = angular.module('books.list.bookListController', [
    require('services/book-service').name,
    require('components/createBook').name,
    require('components/updateBook').name
    ])
    .controller('bookListController', bookListController);

function bookListController (bookService, $scope, modalService) {
    const vm = this;

    vm.hidden = true;
    vm.booksList = bookService.booksList();

    vm.editBook = function (bookData) {
        vm.hidden = false;

        var modalOptions = {
            closeButtonText: 'Cancel',
            actionButtonText: 'Save changes',
            headerText: 'Update book',
            bodyText: `<update-book edit-book='modalOptions.book'></update-book>`,
            displayAction: true,
            book: _.clone(bookData)
        };

        modalService.showModal(modalOptions).then(function (modalScope) {
          bookService.updateBook(modalScope.modalOptions.book);
        });
    };

    vm.deleteBook = function(id) {
      var modalOptions = {
          closeButtonText: 'Cancel',
          actionButtonText: ' Delete',
          headerText: 'Delete book',
          bodyText: `Are you sure you want to delete it?`,
          displayAction: true,
          actionClass: 'btn-danger fa fa-trash'
      };
      modalService.showModal(modalOptions).then(function (modalScope) {
        bookService.deleteBook(id);
      });
    };
}
