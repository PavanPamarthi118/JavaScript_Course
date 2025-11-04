const todoList = [{ name: '', dueDate: '' }];

document.querySelector('.js-add-to-button')
    .addEventListener('click', () => {
        addTodo()
    });

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    const dateElement = document.querySelector('.js-due-date-input');
    const dueDate = dateElement.value;

    todoList.push({ name, dueDate });

    inputElement.value = '';
    dateElement.value = '';
    renderTodoList();
}

function renderTodoList() {

    let todohtml = '';
    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        // const name = todoObject.name;
        // const dueDate = todoObject.dueDate;
        const { name, dueDate } = todoObject;
        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button class="delete-todo-button" onClick="deleteTodo(${i})">
        Delete
        </button>
        `;

        todohtml += html;
    }

    document.querySelector('.js-todo-list').innerHTML = todohtml;

}
function deleteTodo(index) {
    todoList.splice(index, 1);
    renderTodoList();
}