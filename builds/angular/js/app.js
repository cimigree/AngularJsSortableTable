var listApp = angular.module("listApp", ["ngRoute", "myControllers"]);

listApp.config(["$routeProvider", function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "js/partials/list.html",
      controller: "ListController"
    })
    .when("/items", {
      templateUrl: "js/partials/list.html",
      controller: "ListController"
    })
    .when("/detail/:itemId", {
      templateUrl: "js/partials/list-item-detail.html",
      controller: "ListItemController"
    })
    .when("/stores", {
      templateUrl: "js/partials/store.html",
      controller: "StoreController"
    })
    .when("/categories", {
      templateUrl: "js/partials/category.html",
      controller: "CategoryController"
    })
    .otherwise({
      redirectTo: "/"
    })
}])
            