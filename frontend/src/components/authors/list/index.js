class authorListController {
    constructor(authors, modalService, AuthorService) {
        this.authorService = AuthorService;
        this.modalService = modalService;
        this.hidden = true;
        this.sortType = 'name';
        this.authorsList = authors;

        this.modalOptions = {
            closeButtonText: 'Cancel',
            actionButtonText: ' Delete',
            headerText: 'Delete book',
            bodyText: 'Are you sure you want to delete it?',
            displayAction: true,
            actionClass: 'btn-danger fa fa-trash'
        };
    }

    deleteAuthor(authorId) {
        this.authorService.getAuthorBooks(authorId).then((res) => {
            var authorName = '';

            if (res.data.length > 0) {
                authorName = res.data[0].author_id.name;
            }

            this.modalOptions.bodyText += `${authorName} has ${res.data.length} books`;

            this.modalService.showModal(this.modalOptions).then((modalScope) => {
                this.authorService.deleteItem(authorId).then(() => {
                    let pos = this.authorsList.findIndex(author => author._id === authorId)
                    this.authorsList.splice(pos, 1);
                });

            });
        });
    };
}

module.exports = angular.module('books.list.authorsListController', [
    require('components/authors/create').name
])
.controller('authorListController', authorListController);
