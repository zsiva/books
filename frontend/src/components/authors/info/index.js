module.exports = angular.module('books.authorInfoController', [])
    .controller('authorInfoController', authorInfoController);

function authorInfoController(authorData) {
    const vm = this;

    if(authorData.length > 0) {
      vm.authorName = authorData[0].author_id.name;
    }
    vm.booksList = authorData;
}
