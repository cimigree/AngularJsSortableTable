angular.module('listApp')
       .controller('ListItemController', ['$scope', '$routeParams', 'apiFactory', 
          function ($scope, $routeParams, apiFactory) {
            $scope.item = null;
            var itemId = $routeParams.itemId
            if(itemId !== "new") {
              apiFactory.getItem(itemId)
                .then(function(response) {
                  $scope.item = response.data.item;
              });
          }
       }])
