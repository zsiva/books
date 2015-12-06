module.exports = angular.module('books.list.authorsListController', [])
    .controller('authorListController', authorListController);

function authorListController (authorService) {
    const vm = this;

    vm.hidden = true;
    vm.authorsList = authorService.authorsList();

}
