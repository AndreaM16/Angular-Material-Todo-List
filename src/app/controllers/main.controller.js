/**
 * Created by andream16 on 18.03.17.
 */
(function () {
    'use strict';

    angular
        .module('todoApp')
        .controller('MainController', MainController);

    MainController.$inject = [];

    function MainController() {

        var vm = this;
        vm.todos = [];
        
        vm.buttonTitle = "Add To Do";
        vm.label = "To Do";
        vm.todoList = { label : "Todos"};
        
        vm.addToDo = addToDo;

        function addToDo() {
            if(!_.isUndefined(vm.todo.content)){
                vm.todos.push({ content : vm.todo.content });
            }
        }

    }
    
})();