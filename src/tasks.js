import { createTaskDiv } from "./DOMcontroller";

let userAddedTasks = [];

class Task {
   constructor(description, dueDate, priority, projectFolder) {
      this.description = description;
      this.dueDate = dueDate;
      this.priority = priority;
      this.projectFolder = projectFolder;
   }
}

function addTask() {
   const submitForm = document.getElementById('taskForm');
   const description = document.querySelector('#taskDescription');
   const dueDate = document.querySelector('#taskDueDate');
   const priority = document.querySelector('#priorityLevel');
   const projectFolder = document.getElementById('taskProject');
   submitForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const task = new Task(description.value, dueDate.value, priority.value, projectFolder.value);
      userAddedTasks.push(task);
      document.getElementById('taskForm').reset(); // resets form on submit
      displayTasks();
   });
}

function displayTasks() {
   const userTasks = document.querySelector('.user-tasks');
   userTasks.textContent = '';
   userAddedTasks.forEach((task, index) => {
      createTaskDiv(task, index);
   });
   console.log(userAddedTasks);
   removeUserTask();
}

function removeUserTask() {
   const rmvTaskBtn = document.querySelectorAll('.remove-task-btn');
   rmvTaskBtn.forEach((btn) => {
      btn.addEventListener('click', () => {
         userAddedTasks.splice(btn.getAttribute('data'), 1);
         displayTasks();
      });
   });
}

export {
   addTask,
   userAddedTasks
};