const HTTP = new WeakMap();

class ItemService {
  constructor ($http) {
    'ngInject';
    HTTP.set(this, $http);
    this.collection = "";
  }

  getAllItems(){
    return HTTP.get(this).get(`/api/${this.collection}s/`).then(result => result.data );
  }

  getItem(slug){
    return HTTP.get(this).get(`/api/${this.collection}s/${slug}`).then(result =>  result.data[0]);
  }

  deleteItem (itemId) {
      return HTTP.get(this).delete(`/api/delete${this.collection}/${itemId}`).then(item => item);
  }

  createItem(item) {
      return HTTP.get(this).post(`/api/create${this.collection}`, item);
  }

  checkIfItemExists(api_route, title){
    return HTTP.get(this).get(`/api/itemExists/${title}`).then(result =>  result.data );
  }

  updateItem(newAuthor) {
      return HTTP.get(this).put(`/api/update${this.collection}/${newAuthor._id}`, newAuthor).then(result =>  result.data );
  }
}

export default ItemService;
