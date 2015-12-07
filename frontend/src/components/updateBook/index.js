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

function updateBookController(bookService, $scope, $filter) {
    const vm = this;

    $scope.$on('editBook', function (scopeDetails, dataFromParent) {
        dataFromParent.data.bought_on = $filter('date')(new Date(dataFromParent.data.bought_on), 'dd-MM-yyyy');
        vm.editBook = dataFromParent.data;
    });
    vm.updateBook = function () {
        bookService.updateBook(vm.editBook);
    };

    vm.close = function () {
    };
}
