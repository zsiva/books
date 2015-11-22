module.exports = angular.module('books.createBook', [
    require('services/book-service').name
]).directive('createBook', createBook);

function createBook() {
    return {
        restrict: 'E',
        bindToController: true,
        controllerAs: 'vm',
        scope: {},
        template: require('./template.html'),
        controller: createBookController
    };
}

function createBookController(bookService) {
    const vm = this;

    setupNewBook();

    vm.addBook = function () {
        bookService.addBook(vm.newBook);
        setupNewBook();
    };

    function setupNewBook() {
        vm.newBook = {
            title: '',
            author: '',
            bought_on: ''
        };
    }
}
