module.exports = angular.module('books.bookCreate', [
    require('services/book-service').name
]).directive('bookCreate', bookCreate);

function bookCreate() {
    return {
        restrict: 'E',
        bindToController: true,
        controllerAs: 'vm',
        scope: {},
        template: require('./template.html'),
        controller: bookCreateController
    };
}

function bookCreateController(bookService) {
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
