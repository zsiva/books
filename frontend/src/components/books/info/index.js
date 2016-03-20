import STATES from '../../../constants/states';

class BookInfoController {
    constructor(bookData, $state, BookService) {
        this.bookService = BookService;
        this.editorEnabled = false;
        this.bookData = bookData;
    }

    saveBook (){
        this.bookService.updateItem(this.bookData);
        $state.go(STATES.BOOKS_LIST);
    };
}
module.exports = angular.module('books.bookInfoController', [])
    .controller('bookInfoController', BookInfoController);
