import _ from 'lodash';
module.exports = angular.module('books.list.authorEditController', [
  require('components/authorCreate').name
])
.controller('authorEditController', authorEditController);

function authorEditController (authorService, $http) {
    const vm = this;

    vm.author = authorService.authorsList();

    vm.updateAuthor = function (authorId) {
      return $http.get('/api/books/' + authorId).then( function (res) {
          var authorName = res.data[0].author_id.name;
      });
    }

}
