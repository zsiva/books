/**
* @desc directive that creates an input and button to add new authors
* @example <author-create></author-create>
*/

class AuthorCreate {
    constructor() {
        this.template = require('./template.html');
        this.restrict = 'EA';
        this.controllerAs = 'vm';
        this.bindToController = true;
        this.authorsList = [];
        this.controller = AuthorCreateController;
        this.scope = {}
    }
}

class AuthorCreateController {
    constructor (AuthorService) {
        this.newAuthor = {};
        this.AuthorService = AuthorService;
        this.setupNewAuthor();
    }

    addAuthor (){
        this.AuthorService.createItem(this.newAuthor);
        this.setupNewAuthor();
    };

    setupNewAuthor() {
        this.newAuthor = {
            title: '',
            books: []
        };
    }
}

module.exports = angular.module('books.authorCreate', [])
    .directive('authorCreate', () => new AuthorCreate);
