import STATES from '../../../constants/states';

class BookInfoController {
    constructor(bookData, $state, BookService) {
        this.bookService = BookService;
        this.editorDisabled = true;
        this.bookData = bookData;
        this.$state = $state;
    }

    saveBook (){
        this.bookService.updateItem(this.bookData);
        this.$state.go(STATES.BOOKS_LIST);
    };
}
module.exports = angular.module('books.bookInfoController', [])
    .controller('bookInfoController', BookInfoController);
