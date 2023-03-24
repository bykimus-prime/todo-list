import { createTaskDiv } from "./DOMcontroller";
import { selectedProjectId, userAddedProjects } from "./projects";

let selectedTaskId = null;
const userTasks = document.querySelector('[data-project-tasks]');

let userAddedTasks = [];

class Task {
   constructor(id, description, dueDate, priority, projectId, projectName) {
      this.id = id;
      this.description = description;
      this.dueDate = dueDate;
      this.priority = priority;
      this.projectId = projectId;
      this.projectName = projectName;
   }
}

userTasks.addEventListener('click', e => {
   selectedTaskId = e.target.dataset.taskId;

   // description.value = selectedTaskId.children[0].innerHTML;
   // dueDate.value = selectedTaskId.children[1].innerHTML;
   // priority.value = selectedTaskId.children[2].innerHTML;
   // projectId.value = selectedTaskId.children[3].innerHTML;
   // projectName.value = selectedTaskId.children[4].innerHTML;
   displayTasks();
   console.log(selectedTaskId);
})

function addTask() {
   const submitForm = document.getElementById('taskForm');
   const description = document.querySelector('#taskDescription');
   const dueDate = document.querySelector('#taskDueDate');
   const priority = document.querySelector('#priorityLevel');
   const projectId = document.getElementById('taskProject');
   submitForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (description == null || description === '') return
      let id = Date.now().toString();
      if (projectId.value == null || projectId.value == '1') {
         const task = new Task(id, description.value, dueDate.value, priority.value, projectId.value, 'All Tasks');
         userAddedTasks.push(task);
      } else {
         const task = new Task(id, description.value, dueDate.value, priority.value, projectId.value, projectId.options[projectId.selectedIndex].id);
         const selectedProject = userAddedProjects.find(project => project.id === projectId.value);
         selectedProject.projectTasks.push(task);
         userAddedTasks.push(task);
      }
      document.getElementById('taskForm').reset(); // resets form on submit
      displayTasks();
   });
}

function editTask() {
   console.log()
}

function displayTasks() {
   const selectedProject = userAddedProjects.find(project => project.id === selectedProjectId);
   const userTasks = document.querySelector('.user-tasks');
   userTasks.textContent = '';
   console.log(selectedProject);
   console.log(selectedProjectId);
   if (selectedProjectId == null || selectedProjectId == '1') {
      userAddedTasks.forEach((task, index) => {
         createTaskDiv(task, index);
      });
   } else {
      selectedProject.projectTasks.forEach((task, index) => {
         createTaskDiv(task, index);
      });
   }
   console.log(userAddedProjects);
   console.log(selectedProjectId);
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
   displayTasks,
   userAddedTasks,
   selectedTaskId
};