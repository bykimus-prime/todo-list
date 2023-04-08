import { addProject, userAddedProjects, Project, render } from "./projects";
import { addTask, Task } from "./tasks";
import { projectBtnChanger, taskBtnChanger } from "./DOMcontroller";
import format from "date-fns/format";
import { LOCAL_STORAGE_PROJECTS_KEY } from "./localStorage";

if (userAddedProjects == '') {
   const project = new Project('2', 'Default');
   userAddedProjects.push(project);
   const task = new Task('3', 'Add project to get started', format(new Date(), "yyyy-MM-dd"), 'High', '2', 'Default');
   const selectedProject = userAddedProjects.find(project => project.id === '2');
   selectedProject.projectTasks.push(task);
   render();
} else {
   userAddedProjects = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECTS_KEY));
   render();
}

projectBtnChanger();
taskBtnChanger();
addProject();
addTask();