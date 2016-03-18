const HTTP = new WeakMap();

class ItemService {
  constructor ($http) {
    'ngInject';
    HTTP.set(this, $http);
    this.collection = "";
  }

  getItems(){
    return HTTP.get(this).get(`/api/${this.collection}s/`).then(result => result.data );
  }

  addItem(api_route, newItem){
      return HTTP.get(this).post(api_route, newItem);
  }

  deleteItem (itemId) {
      return HTTP.get(this).delete(`/api/delete${this.collection}/${itemId}`).then(item => item);
  }

  createItem(item) {
      return HTTP.get(this).post(`/api/create${this.collection}`, item);
  };

  checkIfItemExists(api_route, title){
    return HTTP.get(this).get(`/api/itemExists/${title}`).then(result =>  result.data );
  }
}

export default ItemService;
