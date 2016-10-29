angular.module('cruj', ['ngRoute']).config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'js/index/templateIndex.html',
        controller: 'IndexController'
    });
}]);