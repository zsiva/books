class BookListController {
    constructor(booksData) {
        this.hidden = true;
        this.sortType = 'title';
        this.sortReverse = false;
        this.booksList = booksData;
    }
}

module.exports = angular.module('books.list.bookListController', [])
    .controller('bookListController', BookListController);
