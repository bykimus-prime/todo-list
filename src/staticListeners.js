import { displayTasks } from "./tasks";
import { render } from "./projects";

const userProjects = document.querySelector('[data-user-projects]');
const userTasks = document.querySelector('[data-project-tasks]');
const allTasks = document.querySelector('.all-tasks');
const todayTasks = document.querySelector('.today-tasks');
const weekTasks = document.querySelector('.week-tasks');
const hamburgMenu = document.getElementById('hamburgerMenu');

let selectedProjectId = null
let selectedTaskId = null;

// if the clicked item is a div, set the global variable to the clicked div's projectId
userProjects.addEventListener('click', e => {
   if (e.target.tagName.toLowerCase() === 'div') { // i'm not sure we need this if statement
      selectedProjectId = e.target.dataset.projectId;
      allTasks.classList.remove('selected');
      todayTasks.classList.remove('selected');
      weekTasks.classList.remove('selected');
      render();
   }
})

// sets selected project id and other things to show specified tasks when clicking the related div
allTasks.addEventListener('click', e => {
   selectedProjectId = '1';
   allTasks.classList.add('selected');
   todayTasks.classList.remove('selected');
   weekTasks.classList.remove('selected');
   render();
})

todayTasks.addEventListener('click', e => {
   selectedProjectId = 'today';
   todayTasks.classList.add('selected');
   allTasks.classList.remove('selected');
   weekTasks.classList.remove('selected');
   render();
})

weekTasks.addEventListener('click', e => {
   selectedProjectId = 'week';
   weekTasks.classList.add('selected');
   allTasks.classList.remove('selected');
   todayTasks.classList.remove('selected');
   render();
})

userTasks.addEventListener('click', e => {
   selectedTaskId = e.target.dataset.taskId;
   displayTasks();
})

hamburgMenu.addEventListener('click', e => {
   const navbar = document.getElementById('navbar');
   if (navbar.style.display === 'block' || navbar.style.display === '') {
      navbar.style.display = 'none';
   } else {
      navbar.style.display = 'block';
   }
})

export {
   selectedProjectId,
   selectedTaskId
};