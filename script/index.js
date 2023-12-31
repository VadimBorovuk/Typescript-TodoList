// import {ITodo} from "./utils";
//
// function drawLists(arr, body) {
//     if (!!arr.length) {
//         arr.forEach((item) => {
//             // @ts-ignore
//             const li = document.createElement('li') as HTMLElement
//             li.className = 'list-todo'
//
//             // @ts-ignore
//             li.innerHTML = `
//                 ${item.name}
//                 <button class="btn-remove-list" id="close-${item.id}">&times;</button>
//             `;
//             body.appendChild(li);
//         })
//     } else {
//         const allLi: NodeListOf<Element> = document.querySelectorAll('.list-todo')
//         allLi.forEach(list => list.remove())
//     }
// }
//
// function clearFieldsList (){
//     const allLi: NodeListOf<Element> = document.querySelectorAll('.list-todo')
//     allLi.forEach(list => list.remove())
// }
//
//
// document.addEventListener("DOMContentLoaded", () => {
//
//     const inputTodo: HTMLInputElement = document.querySelector('#todo-name');
//     const createTodo: HTMLButtonElement = document.querySelector('#create-todo');
//     const createAll: HTMLButtonElement = document.querySelector('#clear-all');
//
//     const listsTodo = document.querySelector('#lists-todo');
//
//     let todosLists: Array<Object> = JSON.parse(localStorage.getItem('lists')) || []
//
//     drawLists(todosLists, listsTodo)
//     const btnRemoveList = document.querySelectorAll('.btn-remove-list');
//     btnRemoveList.forEach(btn => {
//         btn.addEventListener('click', () => {
//             const listId = btn.id.split('-')[1];
//
//             // @ts-ignore
//             todosLists = todosLists.filter(todo => todo.id != listId)
//
//             drawLists(todosLists, listsTodo)
//         })
//     })
//     // if (btnRemoveList) {
//     //     btnRemoveList.addEventListener('click', () => {
//     //         const buttonId = btnRemoveList.id;
//     //         console.log('Button ID:', buttonId);
//     //     })
//     // }
//
//     // if (!!todosLists.length) {
//     //     drawLists(todosLists, listsTodo)
//     //     createAll.removeAttribute('disabled')
//     // } else {
//     //     drawLists([], listsTodo)
//     //     createAll.setAttribute('disabled', '');
//     // }
//
//     createAll.addEventListener('click', () => {
//         // @ts-ignore
//         localStorage.setItem('lists', [])
//         clearFieldsList()
//         drawLists([], listsTodo)
//     })
//
//     createTodo.addEventListener('click', () => {
//         const allLi: NodeListOf<Element> = document.querySelectorAll('.list-todo')
//         allLi.forEach(list => list.remove())
//
//         if (!!inputTodo.value.length) {
//             let objTodo: ITodo = {
//                 id: Date.now(),
//                 name: inputTodo.value.trim(),
//                 isShowing: true
//             }
//
//             todosLists.push(objTodo)
//
//             console.log(todosLists)
//             drawLists(todosLists, listsTodo)
//
//             inputTodo.value = ''
//             localStorage.setItem('lists', JSON.stringify(todosLists))
//             // return todosLists
//         } else {
//             alert('input not must be empty')
//         }
//
//     })
//
// // inputTodo?.addEventListener('input', function (event) {
// //     const target = event.target as HTMLInputElement;
// //     console.log(target.value);
// // });
//
// })
