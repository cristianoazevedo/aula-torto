describe('IndexController', function () {
    var $scope;

    beforeEach(module('cruj'));
    beforeEach(inject(function ($rootScope, $controller) {
        $scope = $rootScope.$new();
        $controller('IndexController', {
            $scope: $scope
        });
    }));

    it('Cadastrar uma beer', function () {
        var skol = { nome: 'Skol', teor: '10' };
        $scope.insert(skol);
        expect($scope.list.length).toEqual(1);
    });

    it('Remover uma beer', function () {
        var skol = { nome: 'Skol', teor: '10' };
        var brahma = { nome: 'Brahma', teor: '5' };
        $scope.insert(skol);
        $scope.insert(brahma);
        $scope.remove(0);

        expect($scope.list.length).toEqual(1);
    });

});