class BookCreateController {
    constructor(BookService) {
        this.bookService = BookService;
        this.setupNewBook();
    }

    addBook (){
        this.bookService.createItem(this.newBook);
        this.setupNewBook();
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
