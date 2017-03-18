/**
 * Created by andream16 on 18.03.17.
 */
(function () {
    'use strict';

    angular
        .module('todoApp')
        .directive('acmeHeader', function () {

            return {
                restrict         : 'E',
                controller       : 'HeaderController',
                controllerAs     : 'headerCtrl',
                templateUrl      : 'app/partials/header.html',
                bindToController : true
            }
        });
})();