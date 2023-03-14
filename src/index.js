import { addProject } from "./projects";
import { addTask } from "./tasks";
import { projectBtnChanger, taskBtnChanger } from "./DOMcontroller";

projectBtnChanger();
taskBtnChanger();
addProject();
addTask();