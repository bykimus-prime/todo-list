import { createProjectDiv } from "./DOMcontroller";

let userAddedProjects = [];

class Project {
   constructor(projectTitle) {
      this.projectTitle = projectTitle;
   }
}

const addProject = () => {
   const submitForm = document.getElementById('projectForm');
   const projectTitle = document.querySelector('#projectInput');
   submitForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const project = new Project(projectTitle.value);
      userAddedProjects.push(project);
      displayProjects();
   });
}

const displayProjects = () => {
   const userProjects = document.querySelector('.user-projects');
   userProjects.textContent = '';
   userAddedProjects.forEach((project, index) => {
      createProjectDiv(project, index);
   });
   // removeBook();
}

export { addProject };