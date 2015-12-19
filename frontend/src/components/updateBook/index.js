import _ from 'lodash';
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
        scope: {
          editBook: '='
        }
    };
}

function updateBookController(bookService, $scope, $filter) {
    const vm = this;

}
