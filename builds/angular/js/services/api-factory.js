(function() {
  var apiFactory = function($http) {
  var factory = {};
  factory.getItems = function() {
    return $http.get('http://localhost:3000/items')
  };

  factory.getAllItems = function() {
    return $http.get('http://localhost:3000/items/items_all')
  }

  factory.getItem = function(itemId) {
    return $http.get('http://localhost:3000/items/' + itemId)
  }

  

  factory.editItem = function(itemToEdit) {
    return $http.put('http://localhost:3000/items/' + itemToEdit.id, {
      item: {
        name: itemToEdit.name,
        brandName: itemToEdit.brandName,
        category: itemToEdit.categoryId,
        coupon: itemToEdit.coupon,
        frequency: itemToEdit.frequency,
        note: itemToEdit.note,
        purchased: itemToEdit.purchased,
        quantity: itemToEdit.quantity,
        storeIds: itemToEdit.storeIds
      }
    })
  }

  factory.createItem = function(itemToCreate) {
    return $http.post('http://localhost:3000/items/', {
      item: {
        name: itemToCreate.name,
        brandName: itemToCreate.brandName,
        category: itemToCreate.categoryId,
        coupon: itemToCreate.coupon,
        frequency: itemToCreate.frequency,
        note: itemToCreate.note,
        purchased: itemToCreate.purchased,
        quantity: itemToCreate.quantity,
        storeIds: itemToCreate.storeIds
      }
    })
  }

  factory.deleteItem = function(itemId) {
    return $http.delete('http://localhost:3000/items/' + itemId)
  }

  factory.getStores = function() {
    return $http.get('http://localhost:3000/stores')
  }

  factory.getStoreAllItems = function(storeId) {
    return $http.get('http://localhost:3000/stores/' + storeId +'/all_items')
  }

  factory.getStore = function(storeId) {
    return $http.get('http://localhost:3000/stores/' + storeId)
  }

  factory.editStore = function(storeToEdit) {
    return $http.put('http://localhost:3000/stores/' + storeToEdit.id, {
            store: {
              name: storeToEdit.name
            }
          })
  }

  factory.createStore = function(storeToCreate) {
    return $http.post('http://localhost:3000/stores/', {
            store: {
              name: storeToCreate
            }
          })
  }

  factory.deleteStore = function(storeId) {
    return $http.delete('http://localhost:3000/stores/' + storeId)
  }

  factory.getCategories = function() {
    return $http.get('http://localhost:3000/categories')
  }

  factory.editCategory = function(categoryToEdit) {
    return $http.put('http://localhost:3000/categories/' + categoryToEdit.id, {
            category: {
              name: categoryToEdit.name
            }
          })
  }

  factory.createCategory = function(categoryToCreate) {
    return $http.post('http://localhost:3000/categories/', {
            category: {
              name: categoryToCreate
            }
          })
  }

  factory.deleteCategory = function(categoryId) {
    return $http.delete('http://localhost:3000/categories/' + categoryId)
  }

  return factory;
};
angular.module('listApp').factory('apiFactory', apiFactory )
} ());
