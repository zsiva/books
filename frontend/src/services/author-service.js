module.exports = angular.module('books.authorService', []).service('authorService', authorService);

function authorService($http) {
    let authors = [];

    this.initAuthors = (newAuthors) => authors = newAuthors;

    this.getAuthorsList = () => authors;

    this.addAuthor = (newAuthor) => {
        $http.post('/api/createauthor/', newAuthor).success(function (author) {
            authors.push(author);
        });
    };

    this.updateAuthor = (newAuthor) => {
        $http.put('/api/updateauthor/' + newAuthor._id, newAuthor)
            .then(res => {
                const updatedAuthor = res.data;
                const index = _.findIndex(authors, '_id', updatedAuthor._id);
                authors.splice(index, 1, updatedAuthor);
              });
    };

    this.deleteAuthor = (authorId) => {
        $http.delete('/api/deleteauthor/' + authorId)
            .success(() => {
                let pos = authors.map((author) => author._id).indexOf(authorId);
                authors.splice(pos, 1);
            })
            .error( (data) => console.log('Error: ' + data));
    };
}
