module.exports = angular.module('books.authorService', []).service('authorService', authorService);

function authorService() {
    var authors = [];

    this.initAuthors = function (newAuthors) {
        authors = newAuthors;
    };

    this.authorsList = function () {
        return authors;
    };
}
