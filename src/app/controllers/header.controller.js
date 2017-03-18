/**
 * Created by andream16 on 18.03.17.
 */
(function () {
    'use strict';

    angular
        .module('todoApp')
        .controller('HeaderController', HeaderController);

    function HeaderController() {

        var vm = this;

        vm.title = "To Do App";

        vm.settings = {
            name: 'settings',
            items: [
                'Home',
                'About',
                'Contact'
            ]
        };

        vm.favorite = {
            name: 'favorite',
            items: [
                'Add to Favorites'
            ]
        };

        vm.more = {
            name: 'more',
            items: [
                'Account',
                'Sign Out'
            ]
        };


    }

})();