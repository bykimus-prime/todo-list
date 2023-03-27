(()=>{"use strict";var e={d:(t,n)=>{for(var c in n)e.o(n,c)&&!e.o(t,c)&&Object.defineProperty(t,c,{enumerable:!0,get:n[c]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{iQ:()=>o,gI:()=>s,oS:()=>d,vl:()=>n});let n=null;const c=document.querySelector("[data-project-tasks]");class o{constructor(e,t,n,c,o,s){this.id=e,this.description=t,this.dueDate=n,this.priority=c,this.projectId=o,this.projectName=s}}function s(){const e=document.getElementById("taskForm"),t=document.querySelector("#taskDescription"),n=document.querySelector("#taskDueDate"),c=document.querySelector("#priorityLevel"),s=document.getElementById("taskProject");e.addEventListener("submit",(e=>{if(e.preventDefault(),null==t||""===t)return;let a=Date.now().toString();const r=new o(a,t.value,n.value,c.value,s.value,s.options[s.selectedIndex].id);u.find((e=>e.id===s.value)).projectTasks.push(r),document.getElementById("taskForm").reset(),d()}))}function d(){const e=u.find((e=>e.id===r));document.querySelector(".user-tasks").textContent="",console.log(e),console.log(r),null==r||"1"==r?u.forEach((e=>{e.projectTasks.forEach(((e,t)=>{a(e,t)}))})):e.projectTasks.forEach(((e,t)=>{a(e,t)})),console.log(u),console.log(r),document.querySelectorAll(".remove-task-btn").forEach((e=>{e.addEventListener("click",(()=>{u.forEach((t=>{t.projectTasks.forEach((t=>{t.splice(e.getAttribute("data"),1)}))})),d()}))}))}function a(e,t){const c=document.querySelector(".user-tasks"),o=document.createElement("div");o.classList.add("user-task"),o.dataset.taskId=e.id;const s=document.createElement("p");s.classList.add("project-title"),s.innerText=`${e.description}`,o.append(s);const d=document.createElement("p");d.classList.add("task-date"),d.innerText=`${e.dueDate}`,o.append(d);const a=document.createElement("p");a.classList.add("task-priority"),a.innerText=`${e.priority}`,o.append(a);const r=document.createElement("p");r.classList.add("project-folder"),r.innerText=`${e.projectName}`,o.append(r);const l=document.createElement("div");l.classList.add("task-btns"),o.append(l);const i=document.createElement("img");i.setAttribute("data",t),i.classList.add("edit-task-btn"),i.src="./images/edit-button.svg",l.appendChild(i);const u=document.createElement("img");u.setAttribute("data",t),u.classList.add("remove-task-btn"),u.src="./images/trash-can.svg",l.appendChild(u),e.id===n&&o.classList.add("selected-task"),c.append(o)}c.addEventListener("click",(e=>{n=e.target.dataset.taskId,d(),console.log(n)}));let r=null;const l=document.querySelector("[data-user-projects]"),i=document.querySelector(".all-tasks");let u=[];class m{constructor(e,t){this.id=e,this.projectTitle=t,this.projectTasks=[]}}function p(){const e=document.getElementById("taskProject");l.textContent="",e.textContent="",u.forEach(((e,t)=>{!function(e,t){const n=document.querySelector("[data-user-projects]"),c=document.createElement("div");c.classList.add("user-project"),c.setAttribute("id",`${e.projectTitle}`),c.dataset.projectId=e.id;const o=document.createElement("p");o.classList.add("project-title"),o.innerText=e.projectTitle,c.append(o);const s=document.createElement("img");s.setAttribute("data",t),s.classList.add("remove-project-btn"),s.src="./images/trash-can.svg",c.appendChild(s),e.id===r&&c.classList.add("selected"),n.append(c)}(e,t)})),u.forEach((t=>{let n=document.createElement("option");n.value=t.id,n.innerText=t.projectTitle,n.id=t.projectTitle,e.appendChild(n)})),console.log(u),document.querySelectorAll(".remove-project-btn").forEach((e=>{e.addEventListener("click",(()=>{u.splice(e.getAttribute("data"),1),p()}))})),console.log(t.userAddedTasks)}if(l.addEventListener("click",(e=>{"div"===e.target.tagName.toLowerCase()&&(r=e.target.dataset.projectId,i.classList.remove("selected"),console.log(r),p(),d())})),i.addEventListener("click",(e=>{r="1",i.classList.add("selected"),p(),d(),console.log(r)})),""==u){const e=new m("2","Default");u.push(e);const t=new o("3","Add a project to get started","Now","High","2","Default"),n=u.find((e=>"2"===e.id));n.projectTasks.push(t),p(),d()}!function(){const e=document.getElementById("newProjectBtn"),t=document.getElementById("project-submit-btn"),n=document.getElementById("project-cancel-btn");e.addEventListener("click",(()=>{document.getElementById("projectForm").style.display="block",document.getElementById("newProjectBtn").style.display="none",document.getElementById("projectInput").focus()})),t.addEventListener("click",(()=>{document.getElementById("projectForm").style.display="none",document.getElementById("newProjectBtn").style.display="block"})),n.addEventListener("click",(()=>{document.getElementById("projectForm").style.display="none",document.getElementById("newProjectBtn").style.display="block",document.getElementById("projectForm").reset()}))}(),function(){const e=document.getElementById("taskFormDispBtn"),t=document.getElementById("task-submit-btn"),n=document.getElementById("task-cancel-btn"),c=document.querySelector(".modal"),o=document.querySelector(".overlay"),s=()=>{c.classList.remove("active"),o.classList.remove("active")};e.onclick=()=>{c.classList.add("active"),o.classList.add("active"),document.getElementById("taskDescription").focus()},t.onclick=s,o.onclick=s,n.addEventListener("click",(()=>{s(),document.getElementById("taskForm").reset()}))}(),function(){const e=document.querySelector("[data-new-project-form]"),t=document.querySelector("[data-new-project-input]");e.addEventListener("submit",(e=>{if(e.preventDefault(),null==t||""===t)return;let n=Date.now().toString();const c=new m(n,t.value);t.value=null,u.push(c),p()}))}(),s()})();