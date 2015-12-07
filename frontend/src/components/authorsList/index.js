module.exports = angular.module('books.list.authorsListController', [])
    .controller('authorListController', authorListController);

function authorListController (authorService, $http) {
    const vm = this;

    vm.hidden = true;
    vm.authorsList = authorService.authorsList();

    vm.showBooks = function (authorId) {
      console.log(authorId);
      return $http.get('/api/books/' + authorId).then( function (res) {
          //vm.authorBooks = res.data;
          console.log('books for this author', res.data);
      });
    }

}
