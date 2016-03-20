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
    
    getAuthorBooks(authorId) {
        return HTTP.get(this).get(`/api/authorbooks/${authorId}`);
    }
}

export default AuthorService;
