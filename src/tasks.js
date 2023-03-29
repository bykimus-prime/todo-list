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

function editTask() {
   const editTaskBtn = document.querySelectorAll('.edit-task-btn');
   const submitEditForm = document.getElementById('editTaskForm');
   editTaskBtn.forEach((btn) => {
      btn.addEventListener('click', (e) => {
         taskBtnChanger().showEditTaskForm();

         const matchingTaskId = e.target.dataset.taskProjectId;
         const selectedProject = userAddedProjects.find(project => project.id === matchingTaskId);
         selectedTaskId = e.target.dataset.taskId;
         const selectedTask = selectedProject.projectTasks.find(task => task.id === selectedTaskId);

         // gets info from selected task
         let description = selectedTask.description;
         let dueDate = selectedTask.dueDate;
         let priority = selectedTask.priority;
         let projectName = selectedTask.projectName;

         // uses selected task info to populate edit task modal
         document.getElementById('editTaskDescription').setAttribute('value', description);
         document.getElementById('editTaskDueDate').setAttribute('value', dueDate);
         document.getElementById('editPriorityLevel').value = priority;
         // priority method directly above doesn't work, need to use this way to select projectName option in html
         const text = projectName;
         const select = document.querySelector('#editTaskProject');
         const options = Array.from(select.options);
         const optionToSelect = options.find(item => item.text === text);
         optionToSelect.selected = true;
         
         submitEditForm.addEventListener('submit', (e) => {
            const editDescription = document.querySelector('#editTaskDescription');
            const editDueDate = document.querySelector('#editTaskDueDate');
            const editPriority = document.querySelector('#editPriorityLevel');
            const editProjectId = document.getElementById('editTaskProject');
            e.preventDefault();
            if (description == null || description === '') return
            // takes source object properties and copies to a target object. returns the modified object
            const source = { description: editDescription.value, dueDate: editDueDate.value, priority: editPriority.value, projectId: editProjectId.value, projectName: editProjectId.options[editProjectId.selectedIndex].id };
            const target = selectedTask;
            Object.assign(target, source);

            // find a way to change project folders if edited task is put into a new folder
            // const selectedProject = userAddedProjects.find(project => project.id === projectId);
            // selectedProject.projectTasks.push(task);

            document.getElementById('taskForm').reset();
            displayTasks();
         });
      });
   });
}

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
   console.log(userAddedProjects);
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