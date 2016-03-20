import _ from 'lodash';
import STATES from '../../../constants/states';

module.exports = angular.module('books.authorInfoController', [])
    .controller('authorInfoController', authorInfoController);

function authorInfoController(authorData, $state) {
    const vm = this;

    if(authorData.length > 0) {
      vm.author = authorData[0].author_id;
      vm.authorName = _.clone(authorData[0].author_id.name);
    }
    vm.booksList = authorData;

    vm.saveAuthor = function () {
      authorService.updateAuthor(vm.author);
      $state.go(STATES.AUTHORS_LIST);
    }

}
