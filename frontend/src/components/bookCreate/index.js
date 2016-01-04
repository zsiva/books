module.exports = angular.module('books.bookCreateController', [])
    .controller('bookCreateController', bookCreateController);

function bookCreateController() {
  const vm = this;
  setupNewBook();

  vm.addBook = function () {
      bookService.addBook(vm.newBook);
      setupNewBook();
  };

  function setupNewBook() {
      vm.newBook = {
          title: '',
          author_id: '',
          bought_on: '',
          category: '',
          description: '',
          format: '',
          rating: ''
      };
  }
}
