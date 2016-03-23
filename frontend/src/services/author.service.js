import ItemService from './item.service';

const HTTP = new WeakMap();

class AuthorService extends ItemService {
    constructor ($http) {
        'ngInject';

        super($http);
        HTTP.set(this, $http);
        this.collection = "author";
        this.authors = [];
    }
}

export default AuthorService;
