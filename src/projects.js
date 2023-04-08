import { createProjectDiv, createDefaultProjectsList } from "./DOMcontroller";
import { displayTasks } from "./tasks";
import { save, LOCAL_STORAGE_PROJECTS_KEY } from "./localStorage";

let userAddedProjects = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECTS_KEY)) || [];

class Project {
   constructor(id, projectTitle) {
      this.id = id;
      this.projectTitle = projectTitle;
      this.projectTasks = [];
   }
}

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
      save();
      displayProjects();
   });
}

function displayProjects() {
   const userProjects = document.querySelector('[data-user-projects]');
   const taskProject = document.getElementById('taskProject');
   const editTaskProject = document.getElementById('editTaskProject');
   const defaultProjects = document.querySelector('.default-projects');
   userProjects.textContent = '';
   taskProject.textContent = '';
   editTaskProject.textContent = '';
   defaultProjects.textContent = '';
   userAddedProjects.forEach((project, index) => {
      createProjectDiv(project, index);
   });
   // adds select option to add new task form
   userAddedProjects.forEach((project) => {
      let newOption = document.createElement('option');
      newOption.value = project.id;
      newOption.innerText = project.projectTitle;
      newOption.id = project.projectTitle;
      taskProject.appendChild(newOption);
   });
   // adds select option to edit task
   userAddedProjects.forEach((project) => {
      let newOption = document.createElement('option');
      newOption.value = project.id;
      newOption.innerText = project.projectTitle;
      newOption.id = project.projectTitle;
      editTaskProject.appendChild(newOption);
   });
   createDefaultProjectsList();
   removeUserProject();
}

function removeUserProject() {
   const rmvProjectBtn = document.querySelectorAll('.remove-project-btn');
   rmvProjectBtn.forEach((btn) => {
      btn.addEventListener('click', () => {
         userAddedProjects.splice(btn.getAttribute('data'), 1);
         save();
         render();
      });
   });
}

function render() {
   displayProjects();
   displayTasks();
}

export {
   addProject,
   userAddedProjects,
   Project,
   displayProjects,
   render
};