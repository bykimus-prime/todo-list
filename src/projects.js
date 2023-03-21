import { createProjectDiv, createHomeOption } from "./DOMcontroller";

let selectedProjectId = null
const userProjects = document.querySelector('[data-user-projects]');

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
   if (e.target.tagName.toLowerCase() === 'div') {
      selectedProjectId = e.target.dataset.projectId;
      displayProjects();
   }
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

export {
   addProject,
   selectedProjectId
};