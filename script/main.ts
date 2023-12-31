import {ITodo} from "./utils";

document.addEventListener("DOMContentLoaded", () => {

    const listsTodo = document.querySelector('#lists-todo');
    let todosListsLc: Array<Object> = JSON.parse(localStorage.getItem('todos')) || [];

    const inputTodo: HTMLInputElement = document.querySelector('#todo-name');
    const inputCheck: HTMLInputElement = document.querySelector('#todo-check');
    const formCreateTodo = document.querySelector('#form-todo');

    if (localStorage.getItem('todos')) {

        todosListsLc.map(todo => {
            createTodo(todo)
        })
    }

    formCreateTodo.addEventListener('submit', e => {
        e.preventDefault()

        if (!!inputTodo.value.length) {

            const objTodo: ITodo = {
                id: Date.now(),
                name: inputTodo.value.trim(),
                isShowing: inputCheck.checked
            }

            todosListsLc.push(objTodo)

            inputTodo.value = ''
            localStorage.setItem('todos', JSON.stringify(todosListsLc))

            createTodo(objTodo)

        } else {
            alert('input not must be empty')
        }
    })

    // @ts-ignore
    formCreateTodo.reset()
    inputTodo.focus()

    listsTodo.addEventListener('click', e => {
        // @ts-ignore
        if (e.target.classList.contains('remove-task')) {
            // @ts-ignore
            const todoId = e.target.closest('li').id

            removeTodo(todoId)
        }
    })

    listsTodo.addEventListener('input', e => {
        // @ts-ignore
        const todoId = e.target.closest('li').id
        // @ts-ignore
        updateTodo(todoId)

    })

    function removeTodo(todoId: any) {
        // @ts-ignore
        todosListsLc = todosListsLc.filter(todo => todo.id != todoId)

        localStorage.setItem('todos', JSON.stringify(todosListsLc))

        document.getElementById(todoId).remove()
    }

    function updateTodo(todoId: any) {
        // @ts-ignore
        let currentTodo = todosListsLc.find(todo => todo.id == todoId)
        if (!currentTodo.isShowing) {
            currentTodo.isShowing = true



        } else {
            currentTodo.isShowing = false
        }


        localStorage.setItem('todos', JSON.stringify(todosListsLc))
    }

    function createTodo(todo: any) {
        const todoLi = document.createElement('li')

        todoLi.setAttribute('id', todo.id)

        if (todo.isShowing) {
            todoLi.classList.add('complete')
        }

        todoLi.innerHTML = `
                <div>
                    <input type="checkbox" name="todos" id="${todo.id}" ${todo.isShowing ? 'checked' : ''}
                    <span>${todo.name}</span>
                    <button class="remove-task">&times;</button>
                </div>
        `

        listsTodo.appendChild(todoLi)
    }
})