import STATES from '../../../constants/states';

class AuthorInfoController {
    constructor(authorData, $state, AuthorService) {
        this.authorService = AuthorService;
        this.editorEnabled = false;
        this.authorData = authorData;

        this.author = authorData.author_id;
        this.authorName = authorData.name;
        this.booksList = authorData.books;
    }

    saveAuthor (){
        this.bookService.updateItem(this.authorData);
        $state.go(STATES.AUTHORS_LIST);
    };
}

module.exports = angular.module('books.authorInfoController', [])
    .controller('authorInfoController', AuthorInfoController);
