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

    vm.showBooks = function (authorId) {
        return $http.get('/api/books/' + authorId).then(function (res) {
            var authorName = '',
                bookList = 'This author has currently no books';
            if (res.data.length > 0) {
                authorName = res.data[0].author_id.name + "'s ";
                bookList = Object.keys(res.data).map(function (key) {
                    return res.data[key].title
                }).join('<br/>');
            }

            var modalOptions = {
                closeButtonText: 'Close',
                actionButtonText: '',
                headerText: authorName + "Books",
                displayAction: false,
                bodyText: bookList
            };

            modalService.showModal(modalOptions);
        });
    };

    vm.deleteAuthor = function (id) {
        var modalOptions = {
            closeButtonText: ' Cancel',
            actionButtonText: ' Delete',
            headerText: 'Delete author',
            bodyText: 'Are you sure you want to delete it?',
            displayAction: true,
            actionClass: 'btn-danger fa fa-trash'
        };
        modalService.showModal(modalOptions).then(function () {
            authorService.deleteAuthor(id);
        });
    };
}
