import ItemService from './item.service';

class BookService extends ItemService {
  constructor ($http) {
    'ngInject';

    super($http);
    this.collection = "book";
  }
}

export default BookService;
