module.exports = angular.module('books.createAuthor', [
    require('services/author-service').name
]).directive('createAuthor', createAuthor);

function createAuthor() {
    return {
        restrict: 'E',
        bindToController: true,
        controllerAs: 'vm',
        scope: {},
        template: require('./template.html'),
        controller: createAuthorController
    };
}

function createAuthorController(authorService) {
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
