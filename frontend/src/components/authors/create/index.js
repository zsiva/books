module.exports = angular.module('books.authorCreate', [
    require('services/author-service').name
]).directive('authorCreate', authorCreate);

function authorCreate() {
    return {
        restrict: 'E',
        bindToController: true,
        controllerAs: 'vm',
        scope: {},
        template: require('./template.html'),
        controller: authorCreateController
    };
}

function authorCreateController(authorService) {
    const vm = this;

    setupNewAuthor();

    vm.addAuthor = function () {
        authorService.addAuthor(vm.newAuthor);
        setupNewAuthor();
    };

    function setupNewAuthor() {
        vm.newAuthor = {
            title: '',
            books: []
        };
    }
}
