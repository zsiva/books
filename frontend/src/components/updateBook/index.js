module.exports = angular.module('books.updateBook', [
    require('services/book-service').name
]).directive('updateBook', updateBook);

function updateBook() {
    return {
        restrict: 'E',
        bindToController: true,
        controllerAs: 'vm',
        template: require('./template.html'),
        controller: updateBookController,
        scope: {}
    };
}

function updateBookController(bookService, $scope) {
    const vm = this;

    $scope.$on('editBook', function (scopeDetails, dataFromParent) {
        vm.editBook = dataFromParent.data;
    });
    vm.updateBook = function () {
        bookService.updateBook(vm.editBook);
    };
}
