/**
 * Created by andream16 on 18.03.17.
 */
(function () {
    'use strict';
    angular.module('todoApp')
        .config(mainRoute);

    mainRoute.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

    function mainRoute($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('main', {
                url: '/',
                views: {
                    'main': {
                        templateUrl: 'app/partials/main.html',
                        controller: 'MainController',
                        controllerAs: 'mainCtrl'
                    }
                }
            });

        // use the HTML5 History API
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

        $locationProvider.hashPrefix('!');
    }
})();