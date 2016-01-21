import _ from 'lodash';
module.exports = angular.module('books.bookEdit', [
    require('services/book-service').name
  ]).directive('bookEdit', bookEdit);

function bookEdit() {
    return {
        restrict: 'E',
        bindToController: true,
        controllerAs: 'vm',
        template: require('./template.html'),
        controller: bookEditController,
        scope: {
          editBook: '='
        }
    };
}

function bookEditController() {
    const vm = this;

}
