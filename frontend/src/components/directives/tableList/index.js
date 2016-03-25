/**
* @desc directive that creates a table
*       Header -> keys
*       Content -> values
* @example <table-list data=""></table-list>
*/

class TableList {
    constructor($filter) {
        this.template = require('./template.html');
        this.restrict = 'EA';
        this.controllerAs = 'vm';
        this.bindToController = {
            data: '='
        };
        this.controller = TableListController;
        this.scope = {};
    }
}

class TableListController {
    constructor () {
        if(this.data.length > 0) {
            this.data.forEach(function(v){ delete v._id });
            this.header = Object.keys(this.data[0]).reverse();
        }
    }
}
export default TableList;
