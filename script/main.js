"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
document.addEventListener("DOMContentLoaded", function () {
    var clearAll = document.querySelector('#clear-all');
    var listsTodo = document.querySelector('#lists-todo');
    var todosListsLc = JSON.parse(localStorage.getItem('todos')) || [];
    var inputTodo = document.querySelector('#todo-name');
    var inputCheck = document.querySelector('#todo-check');
    var formCreateTodo = document.querySelector('#form-todo');
    if (localStorage.getItem('todos')) {
        todosListsLc.map(function (todo) {
            createTodo(todo);
        });
    }
    formCreateTodo.addEventListener('submit', function (e) {
        e.preventDefault();
        if (!!inputTodo.value.length) {
            var objTodo = {
                id: Date.now(),
                name: inputTodo.value.trim(),
                isShowing: inputCheck.checked
            };
            todosListsLc.push(objTodo);
            inputTodo.value = '';
            localStorage.setItem('todos', JSON.stringify(todosListsLc));
            createTodo(objTodo);
        }
        else {
            alert('input not must be empty');
        }
    });
    // @ts-ignore
    formCreateTodo.reset();
    inputTodo.focus();
    listsTodo.addEventListener('click', function (e) {
        // @ts-ignore
        if (e.target.classList.contains('remove-task')) {
            // @ts-ignore
            var todoId = e.target.closest('li').id;
            removeTodo(todoId);
        }
    });
    listsTodo.addEventListener('input', function (e) {
        // @ts-ignore
        var todoId = e.target.closest('li').id;
        // @ts-ignore
        updateTodo(todoId, e.target);
    });
    function removeTodo(todoId) {
        // @ts-ignore
        todosListsLc = todosListsLc.filter(function (todo) { return todo.id != todoId; });
        localStorage.setItem('todos', JSON.stringify(todosListsLc));
        document.getElementById(todoId).remove();
    }
    function updateTodo(todoId, el) {
        // @ts-ignore
        var currentTodo = todosListsLc.find(function (todo) { return todo.id == todoId; });
        if (!currentTodo.isShowing) {
            currentTodo.isShowing = true;
        }
        else {
            currentTodo.isShowing = false;
        }
        localStorage.setItem('todos', JSON.stringify(todosListsLc));
    }
    function createTodo(todo) {
        var todoLi = document.createElement('li');
        todoLi.setAttribute('id', todo.id);
        if (todo.isShowing) {
            todoLi.classList.add('complete');
        }
        todoLi.innerHTML = "\n                <div>\n                    <input type=\"checkbox\" name=\"todos\" id=\"".concat(todo.id, "\" ").concat(todo.isShowing ? 'checked' : '', "\n                    <span>").concat(todo.name, "</span>\n                    <button class=\"remove-task\">&times;</button>\n                </div>\n        ");
        listsTodo.appendChild(todoLi);
    }
});
