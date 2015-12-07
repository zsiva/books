module.exports = angular.module('books.list.bookListController', [
    require('services/book-service').name,
    require('components/createBook').name,
    require('components/updateBook').name
    ])
    .controller('bookListController', bookListController);

function bookListController (bookService, $scope, $uibModal) {
    const vm = this;

    vm.hidden = true;
    vm.booksList = bookService.booksList();

    vm.editBook = function (bookData) {
        vm.hidden = false;
        $scope.$broadcast('editBook', {
            data: bookData
        });
        //TODO: edit data with a modal
        /*$uibModal.open({
          template: require('../updateBook/template.html'),
        });*/

    };

    vm.deleteBook = function(id) {
        bookService.deleteBook(id);
    };

    vm.closeModal = function () {
    }
}
