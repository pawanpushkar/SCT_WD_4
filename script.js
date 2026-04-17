const taskInput = document.getElementById("taskInput");
const taskTime = document.getElementById("taskTime");
const taskList = document.getElementById("taskList");

function addTask() {
  if (taskInput.value === "") return;

  const li = document.createElement("li");

  li.innerHTML = `
    <span onclick="toggleComplete(this)">
      ${taskInput.value} 
      <br><small>${taskTime.value}</small>
    </span>
    <div>
      <button onclick="editTask(this)">✏️</button>
      <button onclick="deleteTask(this)">🗑️</button>
    </div>
  `;

  taskList.appendChild(li);

  taskInput.value = "";
  taskTime.value = "";
}

function deleteTask(btn) {
  btn.parentElement.parentElement.remove();
}

function toggleComplete(span) {
  span.parentElement.classList.toggle("completed");
}

function editTask(btn) {
  const li = btn.parentElement.parentElement;
  const span = li.querySelector("span");

  const newTask = prompt("Edit task:", span.innerText);

  if (newTask !== null) {
    span.innerHTML = newTask;
  }
}