/**
* @desc directive that creates the navigation
* @example <navigation></navigation>
* @TODO check if it has data from other collections
*/

import STATES from '../../constants/states';

class Navigation {
    constructor() {
        this.template = require('./template.html'),
        this.controller = NavigationController
        this.restrict = 'EA';
        this.controllerAs = 'vm';
        this.bindToController = true;
        this.scope = {}
    }
}

class NavigationController {
    constructor () {
        this.booksState = STATES.BOOKS_LIST;
        this.authorsState = STATES.AUTHORS_LIST;
    }
}

export default Navigation;
