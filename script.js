// Global Variables
const welcomeMessage = document.getElementById("welcome-message");
const nameInput = document.getElementById("name-input");
const confirmNameButton = document.getElementById("confirm-name");
const secondScreen = document.getElementById("second-screen");

const taskInput = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-task-button");
const listOfTasks = document.getElementById("list-of-tasks");
const taskMessage = document.getElementById("task-message");

const body = document.getElementById("body");
const originalHtml = body.innerHTML;
const resetButton = document.getElementById("reset-button");

// Functions
const changeWelcomeMessage = () => {
  let name = nameInput.value;
  welcomeMessage.innerHTML = `Welcome back, ${name}`
  nameInput.style.display = "none";
  confirmNameButton.style.display = "none";
  secondScreen.style.display = "flex";
}

const updateTaskList = () => {
  // console.log("I've been updated");
  taskMessage.style.display = "none";
  let task = taskInput.value;
  listOfTasks.innerHTML += 
  `<div class="added-task">
    <input class="checkbox" type="checkbox">
    <p class="task-in-list">${task}</p>
    <button class="edit-button">edit</button>
  </div>`
}

const resetPage = () => {
  console.log("reset button");
  body.innerHTML = originalHtml;
  taskInput.reset();
  nameInput.reset();
};



// Logic
confirmNameButton.addEventListener("click", changeWelcomeMessage);

addTaskButton.addEventListener("click", updateTaskList);

resetButton.addEventListener("click", resetPage);