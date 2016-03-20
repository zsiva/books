/**
* @desc directive that creates a dropdown with all the authors
* @example <select-authors-list></select-authors-list>
*/

class SelectAuthorsList {
    constructor() {
        this.template = require('./template.html');
        this.restrict = 'EA';
        this.controllerAs = 'vm';
        this.bindToController = true;
        this.authorsList = [];
        this.controller = SelectAuthorsListController;
        this.scope = {
            selectModel: '='
        }
    }
}

class SelectAuthorsListController {
    constructor (AuthorService) {
        Promise.resolve(AuthorService.getAllItems()).then((data) => {
            console.log(data);
            this.authorsList = data;
        });
    }
}

module.exports = angular.module('books.selectAuthorsList', [])
    .directive('selectAuthorsList', () => new SelectAuthorsList);
