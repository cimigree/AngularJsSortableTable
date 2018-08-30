angular.module('listApp')
    .controller('ListController', ['$scope', 'apiFactory', '$routeParams', function ($scope, apiFactory, $routeParams) {
      function init() {
        if ($routeParams.all == 'all') getAllItems()
        else getNonPurchasedItems()
        apiFactory.getStores()
        .then(function(response) {
          $scope.stores = response.data.stores
        });
      }
      function getAllItems() { 
        apiFactory.getAllItems()
          .then(function(response) {
          $scope.items = response.data.items
        });
      }
      function getNonPurchasedItems() {
        apiFactory.getItems()
          .then(function(response) {
          $scope.items = response.data.items
        });
      }
      
      $scope.getStore = function() {
        if ($routeParams.all == 'all') {
          if ($scope.store_id == null) {
            getAllItems();
          }
          else {
            apiFactory.getStoreAllItems($scope.store_id)
              .then(function(response) {
                $scope.items = response.data.items
              })
            }
          }
        else {
          if ($scope.store_id == null) {
            getNonPurchasedItems();
          }
          else {
            apiFactory.getStore($scope.store_id)
              .then(function(response) {
                $scope.items = response.data.items
              });
          }
        }
      };
   // make a function to set purchased to true when it is checked

   // the alert is not having time to set the definitely delete
   // call a delete with confirmation of delete item (how to get item?)
      $scope.deleteOrNot = function(item) {
        if($scope.definitelyDelete==true) {
          apiFactory.deleteItem(item.id)
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
      init();
      
    }]);
