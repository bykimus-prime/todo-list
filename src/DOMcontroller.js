import { selectedProjectId, selectedTaskId } from "./staticListeners";

function createDefaultProjectsList() {
   const defaultProjects = document.querySelector('.default-projects');
   // create all tasks div
   const allTasks = document.createElement('div');
   allTasks.textContent = 'All Tasks';
   allTasks.classList.add('all-tasks');
   allTasks.dataset.projectId = '1';
   if (allTasks.dataset.projectId === selectedProjectId) {
      allTasks.classList.add('selected');
   }
   // create today tasks div
   const todayTasks = document.createElement('div');
   todayTasks.textContent = 'Today';
   todayTasks.classList.add('today-tasks');
   todayTasks.dataset.projectId = 'today';
   if (todayTasks.dataset.projectId === selectedProjectId) {
      todayTasks.classList.add('selected');
   }
   // create week tasks div
   const weekTasks = document.createElement('div');
   weekTasks.textContent = 'Week';
   weekTasks.classList.add('week-tasks');
   weekTasks.dataset.projectId = 'week';
   if (weekTasks.dataset.projectId === selectedProjectId) {
      weekTasks.classList.add('selected');
   }
   // append to default projects
   defaultProjects.append(allTasks);
   defaultProjects.append(todayTasks);
   defaultProjects.append(weekTasks);
}

function createProjectDiv(project, index) {
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

function createTaskDiv(task, index) {
   const userTasks = document.querySelector('.user-tasks');
   // create task div
   const userTask = document.createElement('div');
   userTask.classList.add('user-task');
   userTask.dataset.taskId = task.id;

   // add task info to div
   const taskTitle = document.createElement('p');
   taskTitle.classList.add('task-title');
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
   editTaskBtn.dataset.taskId = task.id;
   editTaskBtn.dataset.taskProjectId = task.projectId;
   editTaskBtn.classList.add('edit-task-btn');
   editTaskBtn.src = './images/edit-button.svg';
   taskBtns.appendChild(editTaskBtn);

   // add remove button to div
   const rmvTaskBtn = document.createElement('img');
   rmvTaskBtn.setAttribute('data', index);
   rmvTaskBtn.dataset.taskProjectId = task.projectId;
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
   const editTaskSubmitBtn = document.getElementById('edit-task-submit-btn');
   const taskCancelBtn = document.getElementById('task-cancel-btn');
   const editTaskCancelBtn = document.getElementById('edit-task-cancel-btn');
   const editTaskModal = document.querySelector('.edit-task-modal');
   const newTaskModal = document.querySelector('.new-task-modal');
   const overlay = document.querySelector('.overlay');

   function showNewTaskForm() {
      newTaskModal.classList.add('active');
      overlay.classList.add('active');
      document.getElementById('taskDescription').focus();
   }

   function showEditTaskForm() {
      editTaskModal.classList.add('active');
      overlay.classList.add('active');
      document.getElementById('editTaskDescription').focus();
   }

   function closeModal() {
      newTaskModal.classList.remove('active');
      editTaskModal.classList.remove('active');
      overlay.classList.remove('active');
   }

   showTaskFormBtn.onclick = showNewTaskForm;

   taskSubmitBtn.onclick = closeModal;
   editTaskSubmitBtn.onclick = closeModal;
   overlay.onclick = closeModal;

   taskCancelBtn.addEventListener('click', () => {
      closeModal();
      document.getElementById('taskForm').reset();
   })

   editTaskCancelBtn.addEventListener('click', () => {
      closeModal();
      document.getElementById('editTaskForm').reset();
   })
   return { showEditTaskForm }
}

export {
   createProjectDiv,
   createTaskDiv,
   projectBtnChanger,
   taskBtnChanger,
   createDefaultProjectsList,
};