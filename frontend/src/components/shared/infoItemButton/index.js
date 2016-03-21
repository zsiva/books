/**
* @desc directive that creates a button that opens the item information on a new window when clicked
* @example <info-item-button state="'book-info'" stateparams="{ bookId: book._id, bookSlug: book.slug }"></info-item-button>
*/


class InfoItemButton {
    constructor() {
        this.template = `<button class="btn btn-primary fa fa-eye"
            ng-click="vm.showInfo()">&nbsp;Show
            </button>`;
        this.restrict = 'EA';
        this.controllerAs = 'vm';
        this.bindToController = true;
        this.controller = InfoItemButtonController;
        this.scope = {
            state: '=',
            stateparams: '='
        }
    }
}

class InfoItemButtonController {
    constructor ($state) {
        this.$state = $state;
    }
    showInfo() {
        this.$state.go(this.state, this.stateparams)
    }
}

export default InfoItemButton;
