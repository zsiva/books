class MultiSelectController {
    constructor(ItemService, $scope) {
        this.itemService = ItemService;
        this.$scope = $scope;

        this.externalEvents = {
            onItemSelect: angular.noop,
            onInitDone: angular.noop,
        };

        this.settings = {
            scrollable: true,
            scrollableHeight: '300px',
            titleProp: 'name',
            idProp: '_id',
            buttonClasses: 'btn btn-default'
        };

        ItemService.setCollection(this.collection);
        Promise.resolve(ItemService.getAllItems()).then((data) => this.options = data);

        this.closeOnBlur();
    }

    toggleDropdown() {
        this.open = !this.open;
    }

    closeOnBlur() {
        let dropdown = angular.element(document.getElementsByClassName("dropdown-menu"));
        angular.element(document).on('click', (e) => {
            let parent = e.target.parentElement;
            if(parent && !parent.className.includes('multiselect-parent') && dropdown[0].offsetHeight > 0) {
                this.$scope.$apply(() => this.open = false);
            }
        });
    }

    getPropertyForObject(object, property) {
        if (angular.isDefined(object) && object.hasOwnProperty(property)) {
            return object[property];
        }
        return '';
    }

    getFindObj(id, title) {
        let findObj = {};
        findObj[this.settings.idProp] = id;
        findObj[this.settings.titleProp] = title;

        return findObj;
    }

    setSelectedItem(id, title){
        let findObj = this.getFindObj(id, title);
        let exists = this.selectedModel.findIndex(function(item) {return item._id == id;}) !== -1;

        if (!exists) {
            this.selectedModel.push(findObj);
        }

        this.externalEvents.onItemSelect(findObj);
    }

    checkboxClick($event, id, title) {
        this.setSelectedItem(id, title);
        $event.stopImmediatePropagation();
    }

}

MultiSelectController.$inject = ['ItemService', '$scope'];

export { MultiSelectController };
