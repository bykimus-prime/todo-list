import { displayTasks } from "./tasks";
import { render } from "./projects";
import { save, LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY } from "./localStorage";

const userProjects = document.querySelector('[data-user-projects]');
const userTasks = document.querySelector('[data-project-tasks]');
const defaultProjects = document.querySelector('.default-projects');
const hamburgMenu = document.getElementById('hamburgerMenu');

let selectedProjectId = localStorage.getItem(LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY); // will return null if none selected
let selectedTaskId = null;

// if the clicked item is a div, set the global variable to the clicked user project div's projectId
userProjects.addEventListener('click', e => {
   if (e.target.tagName.toLowerCase() === 'div') { // i'm not sure we need this if statement
      selectedProjectId = e.target.dataset.projectId;
      save();
      render();
   }
})

// sets global variable to clicked default project div's projectId
defaultProjects.addEventListener('click', e => {
   selectedProjectId = e.target.dataset.projectId;
   save();
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