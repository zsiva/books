module.exports = angular.module('books.selectAuthorsList', [
  require('services/author-service').name
])
.directive('selectAuthorsList', selectAuthorsList);

function selectAuthorsList() {
    return {
        restrict: 'E',
        bindToController: true,
        controllerAs: 'vm',
        scope: {
          authorName: '='
        },
        template: require('./template.html'),
        controller: selectAuthorsListController
    };
}

function selectAuthorsListController(authorService) {
    const vm = this;

    vm.authorsList = authorService.authorsList();
}
