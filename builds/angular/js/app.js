var app = angular
            .module('myModule', [])
            .controller('myController', function($scope) {
              var employees = [
                {
                  firstName: 'Sara',
                  lastName: 'Tracey',
                  skills: [
                    { name: 'listening' },
                    { name: 'hugs' },
                    { name: 'smiling' }
                  ]
                },
                {
                  firstName: 'Shannon',
                  lastName: 'Hayward',
                  skills: [
                    { name: 'style' },
                    { name: 'loyalty' },
                    { name: 'hard work' }
                  ]
                },
                {
                  firstName: 'Steve',
                  lastName: 'Hendricks',
                  skills: [
                    { name: 'writing' },
                    { name: 'questioning conventions' },
                    { name: 'housing repair' }
                  ]
                },
                {
                  firstName: 'Ronnie',
                  lastName: 'Bincer',
                  skills: [
                    { name: 'donald duck voice' },
                    { name: 'pink panther theme' },
                    { name: 'water drop noise' }
                  ]
                },
                {
                  firstName: 'John',
                  lastName: 'Green',
                  skills: [
                    { name: 'puffing hair' },
                    { name: 'video editing' },
                    { name: 'synthesis' }
                  ]
                },
                {
                  firstName: 'Jennifer',
                  lastName: 'Hendricks',
                  skills: [
                    { name: 'dancing' },
                    { name: 'math' },
                    { name: 'cogent arguments' }
                  ]
                }
            ];
            $scope.employees = employees;
            $scope.sortName = "lastName";
            $scope.reverseSort = false;
            $scope.sortClass = "";
            $scope.sortData = function(sortName) {
              $scope.reverseSort = ($scope.sortName == sortName) ? !$scope.reverseSort : false
              $scope.sortName = sortName
            };
            $scope.getSortClass = function(sortName) {
              if (sortName == $scope.sortName) {
                return $scope.reverseSort ? "fas fa-sort-down" : "fas fa-sort-up"
              }
              return '';
            };
          });
