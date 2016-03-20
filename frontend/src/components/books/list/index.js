class BookListController {
    constructor(booksData, modalService, BookService) {
        this.bookService = BookService;
        this.modalService = modalService;
        this.hidden = true;
        this.sortType = 'title';
        this.sortReverse = false;
        this.booksList = booksData;

        this.modalOptions = {
            closeButtonText: 'Cancel',
            actionButtonText: ' Delete',
            headerText: 'Delete book',
            bodyText: 'Are you sure you want to delete it?',
            displayAction: true,
            actionClass: 'btn-danger fa fa-trash'
        };
    }

    deleteBook(id) {
        this.modalService.showModal(this.modalOptions).then((modalScope) => {
            this.bookService.deleteItem(id).then((bookId) => {
                let pos = this.booksList.findIndex(book => book._id === id)
                this.booksList.splice(pos, 1);
            });

        });
    };
}

module.exports = angular.module('books.list.bookListController', [])
    .controller('bookListController', BookListController);
