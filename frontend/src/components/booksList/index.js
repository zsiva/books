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
        $scope.$broadcast('editBook', {
            data: bookData
        });

        var modalOptions = {
            closeButtonText: 'Cancel',
            actionButtonText: 'Save changes',
            headerText: 'Update book',
            bodyText: '<update-book></update-book>',
            displayAction: true,
            ok: function () {
              bookService.updateBook(bookData);
            }
        };

        modalService.showModal(modalOptions);
    };

    vm.deleteBook = function(id) {
        bookService.deleteBook(id);
    };

}
