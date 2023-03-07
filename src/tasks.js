import { createTaskDiv } from "./DOMcontroller";

let userAddedTasks = [];

class Task {
   constructor(description, dueDate, priority) {
      this.description = description;
      this.dueDate = dueDate;
      this.priority = priority;
   }
}

const addTask = () => {
   const submitForm = document.getElementById('taskForm');
   const description = document.querySelector('#taskDescription');
   const dueDate = document.querySelector('#taskDueDate');
   const priority = document.querySelector('#priorityLevel');
   submitForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const task = new Task(description.value, dueDate.value, priority.value);
      userAddedTasks.push(task);
      displayTasks();
   });
}

const displayTasks = () => {
   const userTasks = document.querySelector('.user-tasks');
   userTasks.textContent = '';
   userAddedTasks.forEach((task, index) => {
      createTaskDiv(task, index);
   });
   removeUserTask();
}

const removeUserTask = () => {
   const rmvTaskBtn = document.querySelectorAll('.remove-task-btn');
   rmvTaskBtn.forEach((btn) => {
      btn.addEventListener('click', () => {
         userAddedTasks.splice(btn.getAttribute('data'), 1);
         displayTasks();
      });
   });
}

export { addTask };