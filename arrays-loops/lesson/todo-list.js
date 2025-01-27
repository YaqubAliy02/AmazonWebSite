

const todoList = [
  {
    name: 'make a dinner',
    date: '2022-12-22'

  },
  {
    name: "read Qur'an",
    date: '2025-12-22'
  }
];
renderTodoList();
function renderTodoList() {
  let todoListHTML = [];
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, date } = todoObject;
    const html = `
    <div>${name}</div>
    <div>${date}</div>
    <button onclick="
    todoList.splice(${i}, 1)
    renderTodoList();
    " class="delete-todo-button">Delete</button>
     `
    todoListHTML += html;
  }

  console.log(todoListHTML);

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');

  const name = inputElement.value;
  console.log(name);

  const dueDateElement = document.querySelector('.js-due-date-input');
  const  date = dueDateElement.value;
  todoList.push({name, date});
  console.log(todoList);

  inputElement.value = '';
  renderTodoList();
 }