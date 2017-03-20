/**
 * Created by andream16 on 18.03.17.
 */
(function () {
    'use strict';

    angular
        .module('todoApp')
        .directive('acmeTodo', acmeTodo);

    function acmeTodo() {
        var directive = {
            restrict: 'EA',
            scope: {
                text     : '@text'
            },
            templateUrl: "app/partials/todo.html"   
        };

        return directive;
    }

})();