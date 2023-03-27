import { selectedProjectId, userAddedProjects } from "./projects";
import { selectedTaskId } from "./tasks";

function createProjectDiv (project, index) {
   const userProjects = document.querySelector('[data-user-projects]');
   // create project div
   const userProject = document.createElement('div');
   userProject.classList.add('user-project');
   userProject.setAttribute('id', `${project.projectTitle}`);
   userProject.dataset.projectId = project.id;

   // add project info to div
   const projectTitle = document.createElement('p');
   projectTitle.classList.add('project-title');
   projectTitle.innerText = project.projectTitle;
   userProject.append(projectTitle);

   // add remove button to div
   const rmvProjectBtn = document.createElement('img');
   rmvProjectBtn.setAttribute('data', index);
   rmvProjectBtn.classList.add('remove-project-btn');
   rmvProjectBtn.src = './images/trash-can.svg';
   userProject.appendChild(rmvProjectBtn);

   // if the selected project.id matches the global variable, change class
   if (project.id === selectedProjectId) {
      userProject.classList.add('selected');
   }

   // finally add project to projects list
   userProjects.append(userProject);
}

// function createHomeOption() {
//    const optionField = document.getElementById('taskProject');
//    const homeOption = document.createElement('option');
//    homeOption.value = '1';
//    homeOption.setAttribute('id', 'All Tasks');
//    homeOption.textContent = 'All Tasks';
//    homeOption.setAttribute('selected', 'true');
//    optionField.appendChild(homeOption);
// }

function createTaskDiv (task, index) {
   const userTasks = document.querySelector('.user-tasks');
   // create task div
   const userTask = document.createElement('div');
   userTask.classList.add('user-task');
   userTask.dataset.taskId = task.id;

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

   const projectFolder = document.createElement('p');
   projectFolder.classList.add('project-folder');
   projectFolder.innerText = `${task.projectName}`;
   userTask.append(projectFolder);

   // create and append div that buttons go into
   const taskBtns = document.createElement('div');
   taskBtns.classList.add('task-btns');
   userTask.append(taskBtns);

   // add edit button to div
   const editTaskBtn = document.createElement('img');
   editTaskBtn.setAttribute('data', index);
   editTaskBtn.classList.add('edit-task-btn');
   editTaskBtn.src = './images/edit-button.svg';
   taskBtns.appendChild(editTaskBtn);

   // add remove button to div
   const rmvTaskBtn = document.createElement('img');
   rmvTaskBtn.setAttribute('data', index);
   rmvTaskBtn.classList.add('remove-task-btn');
   rmvTaskBtn.src = './images/trash-can.svg';
   taskBtns.appendChild(rmvTaskBtn);

   // if the selected task.id matches the global variable, change class
   if (task.id === selectedTaskId) {
      userTask.classList.add('selected-task');
   }

   // finally add task to tasks list
   userTasks.append(userTask);
}

function projectBtnChanger() {
   const newProjectBtn = document.getElementById('newProjectBtn');
   const projectSubBtn = document.getElementById('project-submit-btn');
   const projectCancelBtn = document.getElementById('project-cancel-btn');
   newProjectBtn.addEventListener('click', () => {
      document.getElementById('projectForm').style.display = 'block';
      document.getElementById('newProjectBtn').style.display = 'none';
      document.getElementById('projectInput').focus();
   })
   projectSubBtn.addEventListener('click', () => {
      document.getElementById('projectForm').style.display = 'none';
      document.getElementById('newProjectBtn').style.display = 'block';
   })

   projectCancelBtn.addEventListener('click', () => {
      document.getElementById('projectForm').style.display = 'none';
      document.getElementById('newProjectBtn').style.display = 'block';
      document.getElementById('projectForm').reset();
   })
}

function taskBtnChanger() {
   const showTaskFormBtn = document.getElementById('taskFormDispBtn');
   const taskSubmitBtn = document.getElementById('task-submit-btn');
   const taskCancelBtn = document.getElementById('task-cancel-btn');
   const modal = document.querySelector('.modal');
   const overlay = document.querySelector('.overlay');

   const showTaskForm = () => {
      modal.classList.add('active');
      overlay.classList.add('active');
      document.getElementById('taskDescription').focus();
   }

   const closeModal = () => {
      modal.classList.remove('active');
      overlay.classList.remove('active');
   }
   showTaskFormBtn.onclick = showTaskForm;
   taskSubmitBtn.onclick = closeModal;
   overlay.onclick = closeModal;

   taskCancelBtn.addEventListener('click', () => {
      closeModal();
      document.getElementById('taskForm').reset();
   })
}

// function hamburgerMenu() {
//    const hamburgMenu = document.getElementById('hamburgerMenu');
//    hamburgMenu.addEventListener('click', () => {
//       switch (document.getElementById('navbar').style.display = 'none') {
//          case document.getElementById('navbar').style.display = 'none':
//             document.getElementById('navbar').style.display = 'block';
//             break;
//          case document.getElementById('navbar').style.display = 'block':
//             document.getElementById('navbar').style.display = 'none';
//             break;
//       }
//    })
// }

export {
   createProjectDiv,
   createTaskDiv,
   projectBtnChanger,
   taskBtnChanger,
   // createHomeOption,
   // hamburgerMenu
};