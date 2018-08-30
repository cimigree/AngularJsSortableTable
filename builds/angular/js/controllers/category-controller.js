angular.module('listApp')
       .controller('CategoryController', ['apiFactory', '$scope', function(apiFactory, $scope) {
        $scope.editCategory = false
        function getCategories() {
          apiFactory.getCategories()
             .then(function(response) {
               $scope.categories = response.data.categories
             });
          }
        $scope.saveCategoryEdit = function(categoryToEdit) {
          apiFactory.editCategory(categoryToEdit)
          .success(function(status){
            if(status = 200) {
              $scope.editCategory = false;
              getCategories();
              alert("You have changed the category name");
            }
          })
          .error(function(response) {
            alert("Something is wrong " + response)
          });
        };
        $scope.saveNewCategory = function() {
          apiFactory.createCategory($scope.newCategory)
          .success(function(status){
            if(status=200) {
              $scope.addCategory = false;
              getCategories();
              alert("You have added " + $scope.newCategory)
            }
          })
          .error(function(response){
              alert("Something is wrong " + response)
          })
        };
        $scope.deleteCategory = function(categoryToDelete) {
          apiFactory.deleteCategory(categoryToDelete.id)
          .success(function(status){
            if(status = 200) {
              getCategories();
              alert("You have deleted " + categoryToDelete.name);
            }
          })
          .error(function(response) {
            alert("Something is wrong " + response)
          });
        };
        getCategories();
       }])