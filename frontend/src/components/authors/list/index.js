class authorListController {
    constructor(authors, modalService, AuthorService) {
        this.authorService = AuthorService;
        this.modalService = modalService;
        this.hidden = true;
        this.sortType = 'name';
        authors.forEach((book, i = 0) => book.name);

        this.authorsList = authors.map((a) => { return {'name': a.name};});

        this.modalOptions = {
            closeButtonText: 'Cancel',
            actionButtonText: ' Delete',
            headerText: 'Delete book',
            bodyText: 'Are you sure you want to delete it?',
            displayAction: true,
            actionClass: 'btn-danger fa fa-trash'
        };
    }
}

module.exports = angular.module('books.list.authorsListController', [
    require('components/authors/create').name
])
.controller('authorListController', authorListController);
