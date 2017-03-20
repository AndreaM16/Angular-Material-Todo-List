/**
 * Created by andream16 on 18.03.17.
 */
(function () {
    'use strict';

    angular
        .module('todoApp')
        .controller('MainController', MainController);

    MainController.$inject = ['$scope'];

    function MainController($scope) {

        var vm = this;
        vm.todos = [];
        
        vm.buttonTitle = "Add To Do";
        vm.label = "To Do";
        vm.todoList = { label : "Todos"};
        
        vm.addToDo = addToDo;
        vm.deleteTodo = deleteTodo;

        function addToDo($event) {
            if( vm.todo && !_.isUndefined(vm.todo.content)){
                if(_.isUndefined($event) || $event && $event.keyCode === 13) {
                    pushNewToDo(vm.todo.content);
                }
            }
        }

        function deleteTodo(index) {
            console.log(vm.todos);
            vm.todos.splice(index, 1);
            console.log(vm.todos);
        }

        function pushNewToDo(todo) {
            vm.todos.push({ content : todo });
            vm.todo.content = '';
        }

    }
    
})();