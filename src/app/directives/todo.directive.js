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
                text     : '@text',
                index    : '@index'
            },
            templateUrl: "app/partials/todo.html",
            controller : "MainController",
            controllerAs : "mainCtrl",
            bindToController : true
        };

        return directive;
    }

})();