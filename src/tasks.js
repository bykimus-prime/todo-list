import { createTaskDiv, taskBtnChanger } from "./DOMcontroller";
import { selectedProjectId, userAddedProjects } from "./projects";
import { format, isEqual, addDays, subDays, isWithinInterval } from "date-fns";

let selectedTaskId = null;
const userTasks = document.querySelector('[data-project-tasks]');

class Task {
   constructor(id, description, dueDate, priority, projectId, projectName) {
      this.id = id;
      this.description = description;
      this.dueDate = dueDate;
      this.priority = priority;
      this.projectId = projectId;
      this.projectName = projectName;
   }
}

userTasks.addEventListener('click', e => {
   selectedTaskId = e.target.dataset.taskId;
   displayTasks();
})

function addTask() {
   const submitForm = document.getElementById('taskForm');
   const description = document.querySelector('#taskDescription');
   const dueDate = document.querySelector('#taskDueDate');
   const priority = document.querySelector('#priorityLevel');
   const projectId = document.getElementById('taskProject');
   submitForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (description == null || description === '') return
      let id = Date.now().toString();
      pushTask(id, description.value, dueDate.value, priority.value, projectId.value, projectId.options[projectId.selectedIndex].id);
      document.getElementById('taskForm').reset(); // resets form on submit
      displayTasks();
   });
}

function pushTask(id, description, dueDate, priority, projectId, projectName) {
   const task = new Task(id, description, dueDate, priority, projectId, projectName);
   const selectedProject = userAddedProjects.find(project => project.id === projectId);
   selectedProject.projectTasks.push(task);
}

function editTask() {
   const editTaskBtn = document.querySelectorAll('.edit-task-btn');
   const submitEditForm = document.getElementById('editTaskForm');
   editTaskBtn.forEach((btn) => {
      btn.addEventListener('click', (e) => {
         taskBtnChanger().showEditTaskForm();

         const matchingTaskId = e.target.dataset.taskProjectId;
         const matchingProject = userAddedProjects.find(project => project.id === matchingTaskId);
         selectedTaskId = e.target.dataset.taskId;
         const selectedTask = matchingProject.projectTasks.find(task => task.id === selectedTaskId);
         console.log('matchingProject:', matchingProject);
         console.log('selectedTask:', selectedTask);

         // gets info from selected task
         let id = selectedTask.id;
         let description = selectedTask.description;
         let dueDate = selectedTask.dueDate;
         let priority = selectedTask.priority;
         let projectName = selectedTask.projectName;

         // uses selected task info to populate edit task modal
         document.getElementById('editTaskDescription').setAttribute('value', description);
         document.getElementById('editTaskDueDate').setAttribute('value', dueDate);
         document.getElementById('editPriorityLevel').value = priority;
         // priority method directly above doesn't work, need to use this way to select projectName option in html
         const text = projectName;
         const select = document.querySelector('#editTaskProject');
         const options = Array.from(select.options);
         const optionToSelect = options.find(item => item.text === text);
         optionToSelect.selected = true;
         
         submitEditForm.addEventListener('submit', (e) => {
            const editDescription = document.querySelector('#editTaskDescription');
            const editDueDate = document.querySelector('#editTaskDueDate');
            const editPriority = document.querySelector('#editPriorityLevel');
            const editProjectId = document.getElementById('editTaskProject');
            e.preventDefault();
            if (description == null || description === '') return
            // takes source object properties and copies to a target object. returns the modified object
            const source = { description: editDescription.value, dueDate: editDueDate.value, priority: editPriority.value, projectId: editProjectId.value, projectName: editProjectId.options[editProjectId.selectedIndex].id };
            const target = selectedTask;
            console.log('editProjectId:', editProjectId.value);
            console.log('selectedTask.projectId:', selectedTask.projectId);
            // if edited task projectId doesn't match current projectId, push task to new project, delete copy from old project
            if (editProjectId.value !== selectedTask.projectId) {
               const task = new Task(id, editDescription.value, editDueDate.value, editPriority.value, editProjectId.value, editProjectId.options[editProjectId.selectedIndex].id);
               const selectedProject = userAddedProjects.find(project => project.id === editProjectId.value);
               selectedProject.projectTasks.push(task);
               // filter out the selected task from the project it was in, in effect deleting it
               const filtered = matchingProject.projectTasks.filter((task) => task != selectedTask);
               matchingProject.projectTasks = filtered;
               matchingProject.projectTasks
               // filters duplicate task objects out of the array via unique id of each task
               const unique = [];
               for (const item of selectedProject.projectTasks) {
                  const isDuplicate = unique.find((obj) => obj.id === item.id);
                  if (!isDuplicate) {
                     unique.push(item);
                  }
               }
               // set the projectTasks array to the new filtered array
               selectedProject.projectTasks = unique;
            } else {
               Object.assign(target, source);
            }
            document.getElementById('taskForm').reset();
            displayTasks();
         });
      });
   });
}

function displayTasks() {
   const selectedProject = userAddedProjects.find(project => project.id === selectedProjectId);
   const userTasks = document.querySelector('.user-tasks');
   userTasks.textContent = '';
   // displays all tasks
   if (selectedProjectId == null || selectedProjectId == '1') {
      userAddedProjects.forEach((project) => {
         project.projectTasks.forEach((task, index) => {
            createTaskDiv(task, index);
         })
      })
   // displays tasks that have dueDate within today
   } else if (selectedProjectId == 'today') {
      let today = Date.parse(format(new Date(), "yyyy-MM-dd")); // format date correctly then parse
      console.log('today', today);
      userAddedProjects.forEach((project) => {
         project.projectTasks.forEach((task, index) => {
            let date = Date.parse(task.dueDate);
            console.log('date', date);
            if (isEqual(date, today)) { // checks if dates are equal. task.dueDate doesn't need format
               createTaskDiv(task, index);
            }
         })
      })
   // displays tasks that have dueDate within next week
   } else if (selectedProjectId == 'week') {
      userAddedProjects.forEach((project) => {
         project.projectTasks.forEach((task, index) => {
            let date = Date.parse(task.dueDate); // parse dueDate value to string
            console.log(date);
            if (nextWeek(date)) {
               console.log('nextweek', nextWeek(date))
               createTaskDiv(task, index);
            }
         })
      })
   } else {
      selectedProject.projectTasks.forEach((task, index) => {
         createTaskDiv(task, index);
      });
   }
   console.log(userAddedProjects);
   editTask();
   removeUserTask();
}

function nextWeek(dueDate) {
   let nextWeek = addDays(new Date(), 7); // value on right adds days to date
   let today = subDays(new Date(), 1); // value on right minuses days from date, because real today wasn't being included in interval
   return isWithinInterval(dueDate, { // checks if date is within interval
      start: today,
      end: nextWeek
   });
}

function removeUserTask() {
   const rmvTaskBtn = document.querySelectorAll('.remove-task-btn');
   rmvTaskBtn.forEach((btn) => {
      btn.addEventListener('click', (e) => {
         const matchingTaskId = e.target.dataset.taskProjectId;
         const selectedProject = userAddedProjects.find(project => project.id === matchingTaskId);
         selectedProject.projectTasks.splice(btn.getAttribute('data'), 1);
         displayTasks();
      });
   });
}

export {
   addTask,
   displayTasks,
   selectedTaskId,
   Task
};