import { addProject, userAddedProjects, Project, displayProjects } from "./projects";
import { addTask, Task, displayTasks } from "./tasks";
import { hamburgerMenu, projectBtnChanger, taskBtnChanger } from "./DOMcontroller";

if (userAddedProjects == '') {
   const project = new Project('2', 'Default');
   userAddedProjects.push(project);
   const task = new Task('3', 'Add a project to get started', 'Now', 'High', '2', 'Default');
   const selectedProject = userAddedProjects.find(project => project.id === '2');
   selectedProject.projectTasks.push(task);
   displayProjects();
   displayTasks();
}

projectBtnChanger();
taskBtnChanger();
// hamburgerMenu();
addProject();
addTask();