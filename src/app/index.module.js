/**
 * Created by andream16 on 18.03.17.
 */
(function(){
    'use strict';

    angular.module('todoApp', ['ngAnimate', 'ngMessages', 'ui.router', 'ngMaterial'])
        .config(function ($mdThemingProvider) {
            $mdThemingProvider.theme('default')
                .primaryPalette('teal')
                .accentPalette('teal')
                .dark();
        });

})();