import STATES from '../../../constants/states';

class BookCreateController {
    constructor(BookService, $state) {
        this.bookService = BookService;
        this.$state = $state;
        this.setupNewBook();
    }

    addBook (){
        this.bookService.createItem(this.newBook);
        this.setupNewBook();
        this.$state.go(STATES.BOOKS_LIST);
    };

    setupNewBook() {
        this.newBook = {
            title: '',
            author_id: '',
            bought_on: '',
            category: '',
            description: '',
            format: '',
            rating: ''
        };
    }
}

module.exports = angular.module('books.bookCreateController', [])
.controller('bookCreateController', BookCreateController);
