/**
* @desc creates a rating input made of stars
* @example <multi-select collection="'book'" selectedModel="itemsList"></star-rating>
*/

class MultiSelect {
    /*@ngInject*/
    constructor($document) {
        this.template = require('./template.html');
        this.restrict = 'EA';
        this.controllerAs = 'vm';
        this.controller = CustomMultiSelectController;
        this.bindToController = {
            selectedModel: '=',
            buttonText: '=',
            searchFilter: '=?',
            collection: '='
        };
        this.scope = {};
        this.listItemsDefault = [];
    }
    compile(tElement) {
        return this.link.bind(this);
    }
    link($scope, $element, $attrs) {
        $scope.externalEvents = {
            onItemSelect: angular.noop,
            onInitDone: angular.noop,
        };

        $scope.listItems = [];
        $scope.settings = {
            scrollable: true,
            scrollableHeight: '300px',
            titleProp: 'name',
            idProp: '_id',
            buttonClasses: 'btn btn-default'
        };

        function getFindObj(id, title) {
            let findObj = {};
            findObj[$scope.settings.idProp] = id;
            findObj[$scope.settings.titleProp] = title;

            return findObj;
        }

        $scope.getPropertyForObject = function (object, property) {
            if (angular.isDefined(object) && object.hasOwnProperty(property)) {
                return object[property];
            }

            return '';
        };


        $scope.setSelectedItem = (id, title) => {
            var findObj = getFindObj(id, title);

            var exists = $scope.listItems.findIndex(function(item) {return item._id == id;}) !== -1;

            if (!exists) {
                $scope.listItems.push(findObj);
            }
            $scope.externalEvents.onItemSelect(findObj);
        };

        $scope.checkboxClick = function ($event, id, title) {
            $scope.setSelectedItem(id, title);
            $event.stopImmediatePropagation();
        };

        $scope.externalEvents.onInitDone();
    }
}

class CustomMultiSelectController {
    constructor ($scope, ItemService) {
        this.$scope = $scope;
        ItemService.setCollection(this.collection);
        Promise.resolve(ItemService.getAllItems()).then((data) => this.options = data);
    }

    toggleDropdown() {
        this.open = !this.open;
        this.selectedModel = this.$scope.listItems;
    };
}

export default MultiSelect;
