import ItemService from './item.service';
import BookService from './book.service';

var moduleName = 'books.services';
module.exports = angular.module(moduleName, [])
  .service('ItemService', ItemService)
  .service('BookService', BookService);

export default moduleName;
