import { addProject, userAddedProjects, Project, displayProjects } from "./projects";
import { addTask, Task, displayTasks } from "./tasks";
import { projectBtnChanger, taskBtnChanger } from "./DOMcontroller";
import format from "date-fns/format";

if (userAddedProjects == '') {
   const project = new Project('2', 'Default');
   userAddedProjects.push(project);
   const task = new Task('3', 'Add project to get started', format(new Date(), "yyyy-MM-dd"), 'High', '2', 'Default');
   const selectedProject = userAddedProjects.find(project => project.id === '2');
   selectedProject.projectTasks.push(task);
   displayProjects();
   displayTasks();
}

projectBtnChanger();
taskBtnChanger();
addProject();
addTask();