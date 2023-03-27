import { createTaskDiv } from "./DOMcontroller";
import { selectedProjectId, userAddedProjects } from "./projects";

let selectedTaskId = null;
const userTasks = document.querySelector('[data-project-tasks]');

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
      const task = new Task(id, description.value, dueDate.value, priority.value, projectId.value, projectId.options[projectId.selectedIndex].id);
      const selectedProject = userAddedProjects.find(project => project.id === projectId.value);
      selectedProject.projectTasks.push(task);
      document.getElementById('taskForm').reset(); // resets form on submit
      displayTasks();
   });
}

// function editTask() {
//    console.log()
// }

function displayTasks() {
   const selectedProject = userAddedProjects.find(project => project.id === selectedProjectId);
   const userTasks = document.querySelector('.user-tasks');
   userTasks.textContent = '';
   console.log(selectedProject);
   console.log(selectedProjectId);
   if (selectedProjectId == null || selectedProjectId == '1') {
      userAddedProjects.forEach((project) => {
         project.projectTasks.forEach((task, index) => {
            createTaskDiv(task, index);
         })
      })
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
      btn.addEventListener('click', (e) => {
         const matchingTaskId = e.target.dataset.taskProjectId;
         console.log(matchingTaskId);
         const selectedProject = userAddedProjects.find(project => project.id === matchingTaskId);
         selectedProject.projectTasks.splice(btn.getAttribute('data'), 1);
         displayTasks();
      });
   });
}

export {
   addTask,
   displayTasks,
   selectedTaskId,
   Task
};