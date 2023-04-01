import { createProjectDiv } from "./DOMcontroller";
import { displayTasks } from "./tasks";

let userAddedProjects = [];

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
      displayProjects();
   });
}

function displayProjects() {
   const userProjects = document.querySelector('[data-user-projects]');
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
   userAddedProjects,
   Project,
   displayProjects
};