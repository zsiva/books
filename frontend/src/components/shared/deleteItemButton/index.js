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
        this.bindToController = true;
        this.controller = DeleteItemButtonController;
        this.scope = {
            itemid: '=',
            itemtype: '='
        }
    }
}

class DeleteItemButtonController {
    constructor (modalService) {
        this.modalService = modalService;
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
        this.modalService.showModal(this.modalOptions).then((modalScope) => {
            this.bookService.deleteItem(this.itemid).then((bookId) => {
                let pos = this.booksList.findIndex(book => book._id === id)
                this.booksList.splice(pos, 1);
            });

        });
    }
}

export default DeleteItemButton;
