angular.module('cruj').service('IndexService', [function () {
    var list = [];

    function getAll(){
        return list;
    }

    function remove(index){
        list.splice(index, 1);
    }

    function insert(arr){
        list.push(arr);
    }

    return {
        getAll:getAll,
        remove:remove,
        insert:insert
    };
}]);