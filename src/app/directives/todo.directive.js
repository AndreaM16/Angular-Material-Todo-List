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
            template: "<md-list-item class='md-line'><i class='material-icons md-avatar'>border_color</i><div class='md-list-item-text' layout='column'><h3>{{text}}</h3></div></md-list-item>"
        };

        return directive;
    }

})();