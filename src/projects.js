// creates event listeners for making a new project
const createEventListener = () => {
   const submitForm = document.getElementById('projectForm');
   submitForm.addEventListener('submit', processNewProject);
}

const processNewProject = (e) => {
   let newProjectInput = document.getElementById('projectInput').value;
   addProject(newProjectInput);
   e.preventDefault();
}

// create project and add to projects list in html
const addProject = (textInput) => {
   let datasetNum = incrementDataset();

   const userProjects = document.querySelector('.user-projects');
   const projectInfo = document.createElement('div');
   projectInfo.classList.add('project-info');
   projectInfo.setAttribute('data-project', `${datasetNum}`);
   userProjects.appendChild(projectInfo);

   const projectName = document.createTextNode(textInput);
   projectInfo.appendChild(projectName);
}

//find next data-set
const incrementDataset = () => {
   const allProjects = document.querySelectorAll('[data-project]');
   return allProjects.length;
}

export { createEventListener };