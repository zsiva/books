import ItemService from './item.service';
import BookService from './book.service';
import AuthorService from './author.service';

var moduleName = 'books.services';
module.exports = angular.module(moduleName, [])
  .service('ItemService', ItemService)
  .service('BookService', BookService)
  .service('AuthorService', AuthorService);

export default moduleName;
