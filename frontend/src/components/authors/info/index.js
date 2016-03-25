class AuthorInfoController {
    constructor(authorData, AuthorService) {
        this.authorService = AuthorService;
        this.editorEnabled = false;
        this.authorData = authorData;
        this.booksList = authorData.books_id;
        this.booksList.forEach((book, i = 0) => book.pos = ++i);

        this.authorsSelected = [];
    }

    saveAuthor (){
        this.authorData.books_id = this.authorsSelected;
        this.authorService.updateItem(this.authorData);
        this.editorEnabled = false;
    };
}

module.exports = angular.module('books.authorInfoController', [])
    .controller('authorInfoController', AuthorInfoController);
