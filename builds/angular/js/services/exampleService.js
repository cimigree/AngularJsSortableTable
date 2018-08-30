(function() {
  var exampleService = function() {
    var something = []
    this.functionName = function(){
      return something
    }
    
    angular.module('listApp').service('exampleService', exampleService )
  }
}());

// in controller file
var ExampleController = function($scope, exampleService) {
  function init() {
    $scope.something = exampleService.functionName();
  }

  init()
}

ExampleController.inject = ['$scope', 'exampleService'];

angular.module('exampleApp')
  .controller('ExampleController', ExampleController);