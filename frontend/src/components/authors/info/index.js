import STATES from '../../../constants/states';

class AuthorInfoController {
    constructor(authorData, $state, AuthorService) {
        this.authorService = AuthorService;
        this.editorEnabled = false;
        this.authorData = authorData;
        this.booksList = authorData.books_id;
        this.$state = $state;
    }

    saveAuthor (){
        this.authorService.updateItem(this.authorData);
        this.$state.go(STATES.AUTHORS_LIST);
    };
}

module.exports = angular.module('books.authorInfoController', [])
    .controller('authorInfoController', AuthorInfoController);
