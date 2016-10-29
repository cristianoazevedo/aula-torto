describe('IndexService', function () {
    var service;

    beforeEach(module('cruj'));
    beforeEach(inject(function ($injector) {
        service = $injector.get('IndexService');
    }));

    it('Inserir um array e verificar seu length', function () {
        var berr = { nome: 'Skol', teor: '10' };
        service.insert(berr);
        expect(service.getAll().length).toEqual(1);
        expect(service.getAll()[0].nome).toEqual(berr.nome);
    });

    it('Remover um elemento do array e verificar seu length', function () {
        var skol = { nome: 'Skol', teor: '10' };
        var brahma = { nome: 'Brahma', teor: '5' };
        service.insert(skol);
        service.insert(brahma);
        service.remove(0);
        expect(service.getAll().length).toEqual(1)
        expect(service.getAll()[0].nome).toEqual(brahma.nome);
    });
});