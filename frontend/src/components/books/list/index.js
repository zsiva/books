import { ItemService } from '../../../services/item-service';

class BookListController {
    constructor(itemFactory) {
        const vm = this;

        vm.itemService = itemFactory;
        vm.hidden = true;
        vm.sortType = 'title';
        vm.sortReverse = false;
        vm.itemService.getItems('authorbooks').then(result => vm.booksList = result);
    }
}

module.exports = angular.module('books.list.bookListController', [])
    .controller('bookListController', BookListController);
