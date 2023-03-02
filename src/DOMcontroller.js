const createProjectDiv = (project, index) => {
   const userProjects = document.querySelector('.user-projects');
   // create project div
   const userProject = document.createElement('div');
   userProject.classList.add('user-project');

   // add project info to div
   const projectTitle = document.createElement('p');
   projectTitle.classList.add('project-title');
   projectTitle.innerText = `${project.projectTitle}`;
   userProject.append(projectTitle);

   // add remove button to div
   const rmvProjectBtn = document.createElement('button');
   rmvProjectBtn.setAttribute('data', index);
   rmvProjectBtn.classList.add('remove-project-btn');
   rmvProjectBtn.textContent = 'Delete Project';
   userProject.appendChild(rmvProjectBtn);

   // finally add project to projects list
   userProjects.append(userProject);
}

export { createProjectDiv }