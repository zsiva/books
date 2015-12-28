module.exports = angular.module('books.authorService', []).service('authorService', authorService);

function authorService($http) {
    var authors = [];

    this.initAuthors = function (newAuthors) {
        authors = newAuthors;
    };

    this.authorsList = function () {
        return authors;
    };

    this.addAuthor = function (newAuthor) {
        $http.post('/api/createauthor/', newAuthor).success(function(author) {
            authors.push(author);
        });
    };

    this.updateAuthor = function (newAuthor) {
        $http.put('/api/updateauthor/' + newAuthor._id, newAuthor)
          .then(res => {
            const updatedAuthor = res.data;
            const index = _.findIndex(authors, '_id', updatedAuthor._id);
            authors.splice(index, 1, updatedAuthor);
          });
    };
}
