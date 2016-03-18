module.exports = angular.module('books.bookCreateController', [])
    .controller('bookCreateController', bookCreateController);

function bookCreateController(itemFactory) {
  const vm = this;
  vm.itemService = itemFactory;
  setupNewBook();

  vm.addBook = function () {
      vm.itemService.setCollection('book');
      vm.itemService.createItem(vm.newBook);
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
