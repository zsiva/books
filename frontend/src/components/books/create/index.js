class BookCreateController {
    constructor(modalService, BookService) {
        this.bookService = BookService;
        this.modalService = modalService;
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
