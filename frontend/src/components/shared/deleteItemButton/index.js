/**
* @desc directive that creates a table
* @example <delete-item-button itemid="" itemtype=""></delete-item-button>
* @TODO check if it has data from other collections
*/

class DeleteItemButton {
    constructor() {
        this.template = `<button class="btn btn-danger fa fa-trash"
            ng-click="vm.deleteItem()">&nbsp;Delete
            </button>`;
        this.restrict = 'EA';
        this.controllerAs = 'vm';
        this.bindToController = {
            itemid: '=',
            itemtype: '='
        };
        this.controller = DeleteItemButtonController;
        this.scope = {}
    }
}

class DeleteItemButtonController {
    constructor (modalService, ItemService) {
        this.modalService = modalService;
        this.itemService = ItemService;
        this.modalOptions = {
            closeButtonText: 'Cancel',
            actionButtonText: ' Delete',
            headerText: `Delete ${this.itemtype}?`,
            bodyText: 'Are you sure you want to delete it?',
            displayAction: true,
            actionClass: 'btn-danger fa fa-trash'
        };
    }

    deleteItem () {
        this.itemService.setCollection(this.itemtype);
        this.modalService.showModal(this.modalOptions).then((modalScope) => {
            //@TODO remove item from list
            this.itemService.deleteItem(this.itemid);

        });
    }
}

export default DeleteItemButton;
