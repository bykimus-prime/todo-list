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

const createProjectDiv = (project, index) => {
   const userProjects = document.querySelector('.user-projects');
   // create card div
   const userProject = document.createElement('div');
   userProject.classList.add('user-project');

   // add book info to cards
   const projectTitle = document.createElement('p');
   projectTitle.classList.add('project-title');
   projectTitle.innerText = `${project.projectTitle}`;
   userProject.append(projectTitle);

   // add remove button to card
   const rmvProjectBtn = document.createElement('button');
   rmvProjectBtn.setAttribute('data', index);
   rmvProjectBtn.classList.add('remove-project-btn');
   rmvProjectBtn.textContent = 'Delete Project';
   userProject.appendChild(rmvProjectBtn);

   // finally add book to book grid
   userProjects.append(userProject);
}

export { addProject };