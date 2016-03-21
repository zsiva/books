/**
* @desc directive that creates a table
* @example <table-list data=""></table-list>
*/

class TableList {
    constructor($filter) {
        this.template = require('./template.html');
        this.restrict = 'EA';
        this.controllerAs = 'vm';
        this.bindToController = true;
        this.controller = TableListController;
        this.scope = {
            data: '='
        }
    }
}

class TableListController {
    constructor () {
        this.header = Object.keys(this.data[0]);
    }
}
export default TableList;
