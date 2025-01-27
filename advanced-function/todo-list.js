

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

  todoList.forEach((todoObject,index) => {
    const { name, date } = todoObject;
    const html = `
    <div>${name}</div>
    <div>${date}</div>
    <button class="delete-todo-button js-delete-todo-button">Delete</button>
     `
    todoListHTML += html;
  });

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-todo-button')
  .forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
      todoList.splice(index, 1);
      renderTodoList();
    })
  })
}

document.querySelector('.js-add-todo-button').addEventListener('click', () => {
  addTodo();
});
document.querySelector('.js-add-todo-button').addEventListener('click', () => {

});
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