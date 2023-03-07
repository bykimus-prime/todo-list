import { createProjectDiv } from "./DOMcontroller";

let userAddedProjects = [];

class Project {
   constructor(projectTitle) {
      this.projectTitle = projectTitle;
   }
}

function addProject() {
   const submitForm = document.getElementById('projectForm');
   const projectTitle = document.querySelector('#projectInput');
   submitForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const project = new Project(projectTitle.value);
      userAddedProjects.push(project);
      displayProjects();
   });
}

function displayProjects() {
   const userProjects = document.querySelector('.user-projects');
   userProjects.textContent = '';
   userAddedProjects.forEach((project, index) => {
      createProjectDiv(project, index);
   });
   removeUserProject();
}

function removeUserProject() {
   const rmvProjectBtn = document.querySelectorAll('.remove-project-btn');
   rmvProjectBtn.forEach((btn) => {
      btn.addEventListener('click', () => {
         userAddedProjects.splice(btn.getAttribute('data'), 1);
         displayProjects();
      });
   });
}

export { addProject };