import { createProjectDiv, createHomeOption } from "./DOMcontroller";

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
   const taskProject = document.getElementById('taskProject');
   userProjects.textContent = '';
   taskProject.textContent = '';
   createHomeOption();
   userAddedProjects.forEach((project, index) => {
      createProjectDiv(project, index);
   });

   userAddedProjects.forEach((project) => {
      let newOption = document.createElement('option');
      newOption.value = project.projectTitle;
      newOption.innerText = project.projectTitle;
      taskProject.appendChild(newOption);
   });

   console.log(userAddedProjects);
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