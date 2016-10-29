angular.module('cruj').directive('indexDirective', [function () {
    return {
        restrict: 'E',
        transclude: true,
        templateUrl: "js/index/templateDirective.html",
        scope: {
            variable: '@'
        },
        link: function (scope, elem, attrs) {
            scope.variableTwo = attrs.variableTwo;
        }
    }
}]);