const todoList = document.getElementById("todo-list");
const todoForm = document.getElementById("todo-form");
const formDelete = document.getElementById("formDelete");
let keyArr = [];

function deleteTodo(e) {
  let li = e.target.parentElement;
  console.log(li);
  localStorage.removeItem(li.id);
  li.remove();
  keyArr.splice(keyArr.indexOf(li.id), 1);
  save();
  printTodos();
}
function editTodo(e) {
  console.log(e.target);
}
function addTodo(e) {
  e.preventDefault();
  let addTodoContent = {
    todoText: todoForm.todo.value,
    todoId: new Date().getTime(),
    todoDone: false,
  };
  todoForm.todo.value = "";
  keyArr.push(addTodoContent);
  save();
  printTodos();
}
function save() {
  let json = JSON.stringify(keyArr);
  localStorage.setItem("todos", json);
}
function printTodos() {
  todoList.innerHTML = "";
  const todos = localStorage.getItem("todos");
  keyArr = todos !== null ? JSON.parse(todos) : keyArr;

  // 화면에 뿌리기
  keyArr.forEach((item) => {
    todoList.innerHTML += `
                        <li class="yet" title="클릭으로 완료하기" id="${item.todoId}">
                        ${item.todoText}
                        <span title="클릭으로 지우기">❎</span>
                        </li>
                        `;
    document.querySelectorAll("#todo-list li").forEach((item) => {
      item.addEventListener("click", editTodo);
    });
    document.querySelectorAll("#todo-list span").forEach((item) => {
      item.addEventListener("click", deleteTodo);
    });
  });
}
todoForm.addEventListener("submit", addTodo);
todoForm.addEventListener("Enter", addTodo);
formDelete.addEventListener("click", (e) => {
  e.preventDefault();
  keyArr = [];
  save();
  localStorage.clear();
  printTodos();
});
printTodos();
