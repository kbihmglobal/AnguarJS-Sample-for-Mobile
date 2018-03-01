window.visro = angular.module('visroapp', ['ngRoute', 'ngCordova']).config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'App/Home/home.html',
        controller: 'homeController',
    }).
    when('/detail/:id', {
        templateUrl: 'App/Detail/detail.html',
        controller: 'detailController',
    });
}]);