//import { ItemService } from '../../../services/item.service';
//import { newBookService } from '../../../services/new-book-service';

class BookListController {
    constructor(modalService, BookService) {
        this.bookService = BookService;
        this.modalService = modalService;
        this.hidden = true;
        this.sortType = 'title';
        this.sortReverse = false;

        this.bookService.getItems().then(result => this.booksList = result);

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
