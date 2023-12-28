"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function drawLists(arr, body) {
    if (!!arr.length) {
        arr.forEach(function (item) {
            // @ts-ignore
            var li = document.createElement('li');
            li.className = 'list-todo';
            // @ts-ignore
            li.innerHTML = "\n                ".concat(item.name, "\n                <button class=\"btn-remove-list\" id=\"close-").concat(item.id, "\">&times;</button>\n            ");
            body.appendChild(li);
        });
    }
    else {
        var allLi = document.querySelectorAll('.list-todo');
        allLi.forEach(function (list) { return list.remove(); });
    }
}
function clearFieldsList() {
    var allLi = document.querySelectorAll('.list-todo');
    allLi.forEach(function (list) { return list.remove(); });
}
document.addEventListener("DOMContentLoaded", function () {
    var inputTodo = document.querySelector('#todo-name');
    var createTodo = document.querySelector('#create-todo');
    var createAll = document.querySelector('#clear-all');
    var listsTodo = document.querySelector('#lists-todo');
    var todosLists = JSON.parse(localStorage.getItem('lists')) || [];
    drawLists(todosLists, listsTodo);
    var btnRemoveList = document.querySelectorAll('.btn-remove-list');
    btnRemoveList.forEach(function (btn) {
        btn.addEventListener('click', function () {
            var listId = btn.id.split('-')[1];
            // @ts-ignore
            todosLists = todosLists.filter(function (todo) { return todo.id != listId; });
            drawLists(todosLists, listsTodo);
        });
    });
    // if (btnRemoveList) {
    //     btnRemoveList.addEventListener('click', () => {
    //         const buttonId = btnRemoveList.id;
    //         console.log('Button ID:', buttonId);
    //     })
    // }
    // if (!!todosLists.length) {
    //     drawLists(todosLists, listsTodo)
    //     createAll.removeAttribute('disabled')
    // } else {
    //     drawLists([], listsTodo)
    //     createAll.setAttribute('disabled', '');
    // }
    createAll.addEventListener('click', function () {
        // @ts-ignore
        localStorage.setItem('lists', []);
        clearFieldsList();
        drawLists([], listsTodo);
    });
    createTodo.addEventListener('click', function () {
        var allLi = document.querySelectorAll('.list-todo');
        allLi.forEach(function (list) { return list.remove(); });
        if (!!inputTodo.value.length) {
            var objTodo = {
                id: Date.now(),
                name: inputTodo.value.trim(),
                isShowing: true
            };
            todosLists.push(objTodo);
            console.log(todosLists);
            drawLists(todosLists, listsTodo);
            inputTodo.value = '';
            localStorage.setItem('lists', JSON.stringify(todosLists));
            // return todosLists
        }
        else {
            alert('input not must be empty');
        }
    });
    // inputTodo?.addEventListener('input', function (event) {
    //     const target = event.target as HTMLInputElement;
    //     console.log(target.value);
    // });
});
