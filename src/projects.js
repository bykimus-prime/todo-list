import { createProjectDiv } from "./DOMcontroller";
import { displayTasks } from "./tasks";

let selectedProjectId = null
const userProjects = document.querySelector('[data-user-projects]');
const allTasks = document.querySelector('.all-tasks');
const todayTasks = document.querySelector('.today-tasks');
const weekTasks = document.querySelector('.week-tasks');

let userAddedProjects = [];

class Project {
   constructor(id, projectTitle) {
      this.id = id;
      this.projectTitle = projectTitle;
      this.projectTasks = [];
   }
}

// if the clicked item is a div, set the global variable to the clicked div's projectId
userProjects.addEventListener('click', e => {
   if (e.target.tagName.toLowerCase() === 'div') { // i'm not sure we need this if statement
      selectedProjectId = e.target.dataset.projectId;
      allTasks.classList.remove('selected');
      todayTasks.classList.remove('selected');
      weekTasks.classList.remove('selected');
      displayProjects();
      displayTasks();
   }
})

// sets selected project id and other things to show specified tasks when clicking the related div
allTasks.addEventListener('click', e => {
   selectedProjectId = '1';
   allTasks.classList.add('selected');
   todayTasks.classList.remove('selected');
   weekTasks.classList.remove('selected');
   displayProjects();
   displayTasks();
   console.log(selectedProjectId);
})

todayTasks.addEventListener('click', e => {
   selectedProjectId = 'today';
   todayTasks.classList.add('selected');
   allTasks.classList.remove('selected');
   weekTasks.classList.remove('selected');
   displayProjects();
   displayTasks();
   console.log(selectedProjectId);
})

weekTasks.addEventListener('click', e => {
   selectedProjectId = 'week';
   weekTasks.classList.add('selected');
   allTasks.classList.remove('selected');
   todayTasks.classList.remove('selected');
   displayProjects();
   displayTasks();
   console.log(selectedProjectId);
})

function addProject() {
   const submitForm = document.querySelector('[data-new-project-form]');
   const projectTitle = document.querySelector('[data-new-project-input]');
   submitForm.addEventListener('submit', e => {
      e.preventDefault();
      if (projectTitle == null || projectTitle === '') return
      let id = Date.now().toString(); // generate unique id based on date
      const project = new Project(id, projectTitle.value);
      projectTitle.value = null; // clear form input field
      userAddedProjects.push(project);
      displayProjects();
   });
}

function displayProjects() {
   const taskProject = document.getElementById('taskProject');
   const editTaskProject = document.getElementById('editTaskProject');
   userProjects.textContent = '';
   taskProject.textContent = '';
   editTaskProject.textContent = '';
   userAddedProjects.forEach((project, index) => {
      createProjectDiv(project, index);
   });

   userAddedProjects.forEach((project) => {
      let newOption = document.createElement('option');
      newOption.value = project.id;
      newOption.innerText = project.projectTitle;
      newOption.id = project.projectTitle;
      taskProject.appendChild(newOption);
   });

   userAddedProjects.forEach((project) => {
      let newOption = document.createElement('option');
      newOption.value = project.id;
      newOption.innerText = project.projectTitle;
      newOption.id = project.projectTitle;
      editTaskProject.appendChild(newOption);
   });
   removeUserProject();
}

function removeUserProject() {
   const rmvProjectBtn = document.querySelectorAll('.remove-project-btn');
   rmvProjectBtn.forEach((btn) => {
      btn.addEventListener('click', () => {
         userAddedProjects.splice(btn.getAttribute('data'), 1);
         displayProjects();
         displayTasks();
      });
   });
}

export {
   addProject,
   selectedProjectId,
   userAddedProjects,
   Project,
   displayProjects
};