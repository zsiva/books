var moduleName='books.itemService';

const HTTP = new WeakMap();

class ItemService
{
  constructor($http){
    HTTP.set(this, $http);
  }

  getItems(items){
    return HTTP.get(this).get('api/' + items).then(result => result.data );
  }

  addItem(api_route, newItem){
      return HTTP.get(this).post(api_route, newItem);
  }

  deleteItem (api_route) {
      HTTP.get(this).delete(api_route).then(item => item);
  }

  checkIfItemExists(api_route, title){
    return HTTP.get(this).get(`/api/itemExists/${title}`).then(result =>  result.data );
  }
  static itemFactory($http){
      return new ItemService($http);
  }
}

ItemService.itemFactory.$inject = ['$http'];

angular.module(moduleName, [])
  .factory('itemFactory', ItemService.itemFactory);

export default moduleName;
