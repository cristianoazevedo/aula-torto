angular.module('cruj').controller('IndexController', ['$scope', 'IndexService', function ($scope, IndexService) {
    $scope.list = [];
    $scope.beer = { nome: '', teor: '' };

    $scope.refresh = function () {
        $scope.list = IndexService.getAll();
        $scope.beer = { nome: '', teor: '' };
    }

    $scope.refresh();

    $scope.insert = function () {
        IndexService.insert($scope.beer);
        $scope.refresh();
    }

    $scope.remove = function (index) {
        console.log(index);
        IndexService.remove(index);
        $scope.refresh();
    }
}]);