module.exports = angular.module('books.list.authorsListController', [
        require('components/authors/authorCreate').name
    ])
    .controller('authorListController', authorListController);

function authorListController(authorService, $http, modalService) {
    const vm = this;

    vm.hidden = true;
    vm.sortType     = 'name';
    vm.sortReverse  = false;

    vm.authorsList = authorService.getAuthorsList();

    vm.deleteAuthor = function (authorId) {
        var modalOptions = {
            closeButtonText: ' Cancel',
            actionButtonText: ' Delete',
            headerText: 'Delete author',
            bodyText: 'Are you sure you want to delete it?',
            displayAction: true,
            actionClass: 'btn-danger fa fa-trash'
        };

        $http.get('/api/authorbooks/' + authorId).then(function (res) {
            var authorName = '',
                hasBooks = '<br />This author has currently no books',
                bookList = '';
            if (res.data.length > 0) {
                hasBooks = '<br />This author has some books: <br />',
                bookList = Object.keys(res.data).map(function (key) {
                    return res.data[key].title
                }).join('<br/>');
            }

            modalOptions.bodyText += hasBooks + bookList;

            modalService.showModal(modalOptions).then(function () {
                authorService.deleteAuthor(authorId);
            });
          });
    };
}
