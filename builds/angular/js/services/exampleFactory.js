(function() {
  var exampleFactory = function() {
  //do javascript
  var factory = {};
  factory.functionName = function() {
    return something;
  };
  return factory;
};
angular.module('listApp').factory('exampleFactory', exampleFactory )
} ());

// in controller file
var ExampleController = function($scope, exampleFactory) {
  function init() {
    $scope.something = exampleFactory.functionName();
  }

  init()
}

ExampleController.inject = ['$scope', 'exampleFactory'];

angular.module('exampleApp')
  .controller('ExampleController', ExampleController);