/**
* @desc directive that creates a dropdown with all the name of the items from the collection
* @example <select-collection-items collection="book"></select-collection-items>
*/

class SelectCollectionItems {
    constructor() {
        this.template = require('./template.html');
        this.restrict = 'EA';
        this.controllerAs = 'vm';
        this.bindToController = {
            selectModel: '=',
            collection: '='
        };
        this.controller = CollectionSelectController;
        this.scope = {}
    }
}

class CollectionSelectController {
    constructor (ItemService) {
        ItemService.setCollection(this.collection);
        Promise.resolve(ItemService.getAllItems()).then((data) => this.itemsList = data);
    }
}

export default SelectCollectionItems;
