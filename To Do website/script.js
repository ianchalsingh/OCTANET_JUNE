const todoInputs = document.querySelector(".todo-inputs");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todos");


document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", addTodos);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

function addTodos(e) {
  e.preventDefault();


  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  const newTodo = document.createElement("li");
  newTodo.classList.add("todo-item");
  newTodo.innerText = todoInputs.value;
  todoDiv.appendChild(newTodo);
  
  

  const compleatedButton = document.createElement("button");
  compleatedButton.innerHTML = '<i class="fas fa-check"><i>';
  compleatedButton.classList.add("complete-btn");
  todoDiv.appendChild(compleatedButton);
 


  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"><i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  
  todoList.appendChild(todoDiv);
  todoInputs.value = "";
}
function deleteCheck(e) {
  const items = e.target;

  
  if (items.classList[0] === "trash-btn") {
    const todo = items.parentElement;

    
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  
  if (items.classList[0] === "complete-btn") {
    const todo = items.parentElement;
    todo.classList.toggle("completed");
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "incomplete":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}
function getTodos() {
  
  let todos = [];

  todos.forEach(function (todo) {
   
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    
    const newTodo = document.createElement("li");
    newTodo.classList.add("todo-item");
    newTodo.innerText = todo;
    todoDiv.appendChild(newTodo);

   
    const compleatedButton = document.createElement("button");
    compleatedButton.innerHTML = '<i class="fas fa-check"><i>';
    compleatedButton.classList.add("complete-btn");
    todoDiv.appendChild(compleatedButton);
    
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"><i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    
    todoList.appendChild(todoDiv);
  });
}
