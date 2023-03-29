import { createTaskDiv, taskBtnChanger } from "./DOMcontroller";
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
      pushTask(id, description.value, dueDate.value, priority.value, projectId.value, projectId.options[projectId.selectedIndex].id);
      document.getElementById('taskForm').reset(); // resets form on submit
      displayTasks();
   });
}

function pushTask(id, description, dueDate, priority, projectId, projectName) {
   const task = new Task(id, description, dueDate, priority, projectId, projectName);
   const selectedProject = userAddedProjects.find(project => project.id === projectId);
   selectedProject.projectTasks.push(task);
}

// function editTask() {
//    const editTaskBtn = document.querySelectorAll('.edit-task-btn');
//    const submitEditForm = document.getElementById('editTaskForm');
//    editTaskBtn.forEach((btn) => {
//       btn.addEventListener('click', (e) => {
//          taskBtnChanger().showEditTaskForm();

//          const matchingTaskId = e.target.dataset.taskProjectId;
//          const selectedProject = userAddedProjects.find(project => project.id === matchingTaskId);
//          console.log('selected project:', selectedProject);

//          selectedTaskId = e.target.dataset.taskId;
//          console.log('selected task id:', selectedTaskId);

//          const selectedTask = selectedProject.projectTasks.find(task => task.id === selectedTaskId);
//          console.log('here is task to work with:', selectedTask);

//          let description = selectedTask.description;
//          let dueDate = selectedTask.dueDate;
//          let priority = selectedTask.priority;
//          let projectName = selectedTask.projectName;
//          console.log('here is task info:', description, dueDate, priority, projectName);
         
//          submitEditForm.addEventListener('submit', (e) => {
//             e.preventDefault();
//             if (description == null || description === '') return
//             let id = Date.now().toString();
//             pushTask(id, description.value, dueDate.value, priority.value, projectId.value, projectId.options[projectId.selectedIndex].id);
//             document.getElementById('taskForm').reset(); // resets form on submit
//             displayTasks();
//          });

//          const editDescription = document.querySelector('#taskDescription');
//          const editDueDate = document.querySelector('#taskDueDate');
//          const editPriority = document.querySelector('#priorityLevel');
//          const editProjectId = document.getElementById('taskProject');
//       });
//    });
// }

function displayTasks() {
   const selectedProject = userAddedProjects.find(project => project.id === selectedProjectId);
   const userTasks = document.querySelector('.user-tasks');
   userTasks.textContent = '';
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
   editTask();
   removeUserTask();
}

function removeUserTask() {
   const rmvTaskBtn = document.querySelectorAll('.remove-task-btn');
   rmvTaskBtn.forEach((btn) => {
      btn.addEventListener('click', (e) => {
         const matchingTaskId = e.target.dataset.taskProjectId;
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