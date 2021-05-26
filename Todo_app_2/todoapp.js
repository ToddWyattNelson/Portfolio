// help credited to thecodingpie
// https://thecodingpie.com/post/how-to-build-a-todo-list-app-with-javascript-and-local-storage
// select everything
const form = document.querySelector(".form");
const input = document.querySelector(".input");
const itemList = document.querySelector(".items");

// array which stores every todos
let todos = [];

// add an eventListener on form, and listen for submit event
form.addEventListener("submit", function (event) {
  // prevent the page from reloading when submitting the form
  event.preventDefault();
  addTodo(input.value);
});

// function to add todo
function addTodo(item) {
  if (item !== "") {
    const todo = {
      id: Date.now(),
      name: item,
      completed: false,
    };

    todos.push(todo);
    addToLocalStorage(todos);

    input.value = "";
  }
}

// function to render given todos to screen
function renderTodos(todos) {
  // clear the list
  itemList.innerHTML = "";

  // run through each item inside todos
  todos.forEach(function (item) {
    // check if the item is completed
    const checked = item.completed ? "checked" : null;

    const li = document.createElement("li");
    li.setAttribute("class", "item");
    li.setAttribute("data-key", item.id);

    if (item.completed === true) {
      li.classList.add("checked");
    }

    li.innerHTML = `
      <input type="checkbox" class="checkbox" ${checked}>
      ${item.name}
      <button class="delete-button">X</button>
    `;

    itemList.append(li);
  });
}

// add the todos to the local storage
function addToLocalStorage(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos(todos);
}

// get the todos to the local storage
function getFromLocalStorage() {
  const reference = localStorage.getItem("todos");
  if (reference) {
    todos = JSON.parse(reference);
    renderTodos(todos);
  }
}

// toggle the value to completed and not completed
function toggle(id) {
  todos.forEach(function (item) {
    if (item.id == id) {
      item.completed = !item.completed;
    }
  });

  addToLocalStorage(todos);
}

// deletes a todo
function deleteTodo(id) {
  todos = todos.filter(function (item) {
    return item.id != id;
  });

  // update the localStorage
  addToLocalStorage(todos);
}

// initially get everything from localStorage
getFromLocalStorage();

itemList.addEventListener("click", function (event) {
  if (event.target.type === "checkbox") {
    toggle(event.target.parentElement.getAttribute("data-key"));
  }

  if (event.target.classList.contains("delete-button")) {
    deleteTodo(event.target.parentElement.getAttribute("data-key"));
  }
});

document.getElementById("filter_all").addEventListener("click", filterAll);
document
  .getElementById("filter_completed")
  .addEventListener("click", filterCompleted);
document
  .getElementById("filter_incompleted")
  .addEventListener("click", filterIncompleted);
function filterAll() {
  itemList.innerHTML = "";
  getFromLocalStorage();
}

function filterCompleted() {
  itemList.innerHTML = "";
  const reference = localStorage.getItem("todos");
  if (reference) {
    todos = JSON.parse(reference);
    todos = todos.filter((todo) => {
      if (todo.completed == true) {
        return todo;
      }
    });

    renderTodos(todos);
  }
}

function filterIncompleted() {
  itemList.innerHTML = "";
  const reference = localStorage.getItem("todos");
  if (reference) {
    todos = JSON.parse(reference);
    todos = todos.filter((todo) => {
      if (todo.completed !== true) {
        return todo;
      }
    });

    renderTodos(todos);
  }
}
