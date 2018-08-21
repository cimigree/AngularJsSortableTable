var app = angular
            .module('myModule', [])
            .controller('myController', function($scope, $http) {
              $scope.seasons = [1,2,3,4,5,6,7,8,9,10,11,12];
              $scope.season = 1;
              $scope.getSeason = function($event) {
                $http.get('http://www.omdbapi.com/?t=Murder She Wrote&season=' + $scope.season + '&apikey=55733ce7')
                  .then(function(response) {
                    $scope.episodes = response.data.Episodes
                  });
               };
          });
