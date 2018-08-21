var app = angular
            .module('myModule', [])
            //stringService is another file that contains reusable logic
            .controller('myController', function($scope, stringService) {
            $scope.transformString = function(input) {
              $scope.output = stringService.processString(input);
            }
          });
