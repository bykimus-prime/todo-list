import { userAddedProjects } from "./projects";
import { selectedProjectId } from "./staticListeners";

const LOCAL_STORAGE_PROJECTS_KEY = 'todo.projects';
const LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY = 'todo.selectedProjectId';

function save() {
   localStorage.setItem(LOCAL_STORAGE_PROJECTS_KEY, JSON.stringify(userAddedProjects));
   localStorage.setItem(LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY, selectedProjectId);
}

export {
   save,
   LOCAL_STORAGE_PROJECTS_KEY,
   LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY
}