angular.module('listApp')
       .controller('StoreController', ['$scope', 'apiFactory', function($scope, apiFactory) {
        $scope.editStore = false
        apiFactory.getStores()
             .then(function(response) {
               $scope.stores = response.data.stores
             });
        $scope.saveStoreEdit = function(storeToEdit) {
          apiFactory.editStore(storeToEdit)
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
        $scope.saveNewStore = function() {
          apiFactory.createStore($scope.newStore)
          .success(function(status){
            if(status=200) {
              $scope.addStore = false;
              alert("You have added " + $scope.newStore)
            }
          })
          .error(function(response){
              alert("Something is wrong " + response)
          })
        };
        $scope.deleteStore = function(storeToDelete) {
          apiFactory.deleteStore(storeToDelete.id)
          .success(function(status){
            if(status = 200) {
              alert("You have deleted " + storeToDelete.name);
            }
          })
          .error(function(response) {
            alert("Something is wrong " + response)
          });
        };
       }])