var app = angular
            .module('myModule', [])
            .controller('myController', function($scope, $http) {
              $http.get('http://localhost:3000/items')
                  .then(function(response) {
                    $scope.items = response.data.items
                  });
              $http.get('http://localhost:3000/stores')
                   .then(function(response) {
                     $scope.stores = response.data.stores
                   });
              $http.get('http://localhost:3000/categories')
                  .then(function(response) {
                    $scope.categories = response.data.categories
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
          });
