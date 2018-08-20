var app = angular
            .module('myModule', [])
            .controller('myController', function($scope) {
              var employees = [
                {
                  firstName: 'Sara',
                  lastName: 'Tracey',
                  dateOfBirth: new Date("5/5/83"),
                  yearsEmployed: 6,
                  salary: 50000,
                  city: 'Pittsburgh'
                },
                {
                  firstName: 'Shannon',
                  lastName: 'Hayward',
                  dateOfBirth: new Date("10/22/83"),
                  yearsEmployed: 1,
                  salary: 42000,
                  city: 'Pittsburgh'
                },
                {
                  firstName: 'Anthony',
                  lastName: 'Ferri',
                  dateOfBirth: new Date("4/3/71"),
                  yearsEmployed: 14,
                  salary: 65000,
                  city: 'Boston'
                },
                {
                  firstName: 'Howard',
                  lastName: 'Cosell',
                  dateOfBirth: new Date("11/22/56"),
                  yearsEmployed: 3,
                  salary: 47000,
                  city: 'Boston'
                },
                {
                  firstName: 'Mark',
                  lastName: 'Austin',
                  dateOfBirth: new Date("12/22/68"),
                  yearsEmployed: 20,
                  salary: 100057,
                  city: 'Boulder'
                },
                {
                  firstName: 'Jennifer',
                  lastName: 'Hendricks',
                  dateOfBirth: new Date("6/9/72"),
                  yearsEmployed: 12,
                  salary: 225000,
                  city: 'Boulder'
                },
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
