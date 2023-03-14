function createProjectDiv (project, index) {
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

function createTaskDiv (task, index) {
   const userTasks = document.querySelector('.user-tasks');
   // create task div
   const userTask = document.createElement('div');
   userTask.classList.add('user-task');

   // add task info to div
   const taskTitle = document.createElement('p');
   taskTitle.classList.add('project-title');
   taskTitle.innerText = `${task.description}`;
   userTask.append(taskTitle);

   const taskDate = document.createElement('p');
   taskDate.classList.add('task-date');
   taskDate.innerText = `${task.dueDate}`;
   userTask.append(taskDate);

   const taskPriority = document.createElement('p');
   taskPriority.classList.add('task-priority');
   taskPriority.innerText = `${task.priority}`;
   userTask.append(taskPriority);

   // add remove button to div
   const rmvTaskBtn = document.createElement('button');
   rmvTaskBtn.setAttribute('data', index);
   rmvTaskBtn.classList.add('remove-task-btn');
   rmvTaskBtn.textContent = 'Delete Task';
   userTask.appendChild(rmvTaskBtn);

   // finally add task to tasks list
   userTasks.append(userTask);
}

function projectBtnChanger() {
   const newProjectBtn = document.getElementById('newProjectBtn');
   const projectSubBtn = document.getElementById('project-submit-btn');
   newProjectBtn.addEventListener('click', () => {
      document.getElementById('projectForm').style.display = 'block';
      document.getElementById('newProjectBtn').style.display = 'none';
   });
   projectSubBtn.addEventListener('click', () => {
      document.getElementById('projectForm').style.display = 'none';
      document.getElementById('newProjectBtn').style.display = 'block';
   })
}

export {
   createProjectDiv,
   createTaskDiv,
   projectBtnChanger
}