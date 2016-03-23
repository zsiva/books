/**
* @desc directive that creates a dropdown with all the name of the items from the collection
* @example <select-collection-items collection="book"></select-collection-items>
*/

class SelectCollectionItems {
    constructor() {
        this.template = require('./template.html');
        this.restrict = 'EA';
        this.controllerAs = 'vm';
        this.bindToController = true;
        this.controller = CollectionSelectController;
        this.scope = {
            selectModel: '=',
            collection: '='
        }
    }
}

class CollectionSelectController {
    constructor (ItemService) {
        console.log(this);
        ItemService.setCollection(this.collection);
        Promise.resolve(ItemService.getAllItems()).then((data) => {
            this.itemsList = data;
        });
    }
}

export default SelectCollectionItems;
