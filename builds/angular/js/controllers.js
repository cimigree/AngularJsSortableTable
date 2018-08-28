var myControllers = angular.module('myControllers', []);

myControllers.controller('ListController', function MyController($scope, $http) {
  $http.get('http://localhost:3000/items')
      .then(function(response) {
        $scope.items = response.data.items
      });
  $http.get('http://localhost:3000/stores')
       .then(function(response) {
         $scope.stores = response.data.stores
       });
  $scope.getStore = function($event) {
    if ($scope.store_id == null) {
      $http.get('http://localhost:3000/items')
      .then(function(response) {
        $scope.items = response.data.items
      });
    }
    else {
      $http.get('http://localhost:3000/stores/' + $scope.store_id)
        .then(function(response) {
          $scope.items = response.data.store.items
        });
    }
   };

   // the alert is not having time to set the definitely delete
   // call a delete with confirmation of delete item (how to get item?)
  $scope.deleteOrNot = function(item) {
    if($scope.definitelyDelete) {
      $http.delete('http://localhost:3000/items/' + item.id)
        .then(function(response) {
          console.log(reponse)
          //if success than do something, otherwise do something else
        })
      $scope.displayAlert = false;
    }
    else {
      console.log("else is called")
      $scope.displayAlert = false;
    }
  }
  $scope.deleteItem = function(item) {
    // console.log("Delete item hit!")
    // console.log(`The item in delete Item is ${JSON.stringify(item)}`)
    $scope.displayAlert = true;
    $scope.deleteOrNot(item)
  }
});

myControllers.controller('ListItemController', function MyController($scope, $http, $routeParams) {
  // what happens if this is a new one?
  $http.get('http://localhost:3000/items/' + $routeParams.itemId).then(function(response) {
    $scope.item = response.data.item;
  });
});

myControllers.controller('StoreController', function MyController($scope, $http) {
  $scope.editStore = false
  $http.get('http://localhost:3000/stores')
       .then(function(response) {
         $scope.stores = response.data.stores
       });
  $scope.saveStoreEdit = function(storeToEdit) {
    $http.put('http://localhost:3000/stores/' + storeToEdit.id, {
      store: {
        name: storeToEdit.name
      }
    })
    .success(function(status){
      if(status = 200) {
        $scope.editStore = false;
        alert("You have changed the store name");
      }
    })
    .error(function(response) {
      alert("Something is wrong " + response)
    });
  };
  $scope.deleteStore = function(storeToDelete) {
    $http.delete('http://localhost:3000/stores/' + storeToDelete.id)
    .success(function(status){
      if(status = 200) {
        alert("You have deleted" + storeToDelete.name);
      }
    })
    .error(function(response) {
      alert("Something is wrong " + response)
    });
  }
});

myControllers.controller('CategoryController', function MyController($scope, $http) {
  $http.get('http://localhost:3000/categories')
    .then(function(response) {
      $scope.categories = response.data.categories
    });
});

