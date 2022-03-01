"use strict";

// Global Variables
var welcomeMessage = document.getElementById("welcome-message");
var nameInput = document.getElementById("name-input");
var confirmNameButton = document.getElementById("confirm-name");
var secondScreen = document.getElementById("second-screen");
var taskInput = document.getElementById("task-input");
var addTaskButton = document.getElementById("add-task-button");
var listOfTasks = document.getElementById("list-of-tasks");
var taskMessage = document.getElementById("task-message"); // Functions

var changeWelcomeMessage = function changeWelcomeMessage() {
  var name = nameInput.value;
  welcomeMessage.innerHTML = "Welcome back, ".concat(name);
  nameInput.style.display = "none";
  confirmNameButton.style.display = "none";
  secondScreen.style.display = "flex";
};

var updateTaskList = function updateTaskList() {
  // console.log("I've been updated");
  taskMessage.style.display = "none";
  var task = taskInput.value;
  listOfTasks.innerHTML += "<div class=\"added-task\">\n    <input type=\"checkbox\">\n    <p>".concat(task, "</p>\n    <button>edit</button>\n  </div>");
}; // Logic


confirmNameButton.addEventListener("click", changeWelcomeMessage);
addTaskButton.addEventListener("click", updateTaskList);