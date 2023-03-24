(()=>{"use strict";let e=null;const t=document.querySelector("[data-project-tasks]");let n=[];class c{constructor(e,t,n,c,o,s){this.id=e,this.description=t,this.dueDate=n,this.priority=c,this.projectId=o,this.projectName=s}}function o(){const e=r.find((e=>e.id===d));document.querySelector(".user-tasks").textContent="",console.log(e),console.log(d),null==d||"1"==d?n.forEach(((e,t)=>{s(e,t)})):e.projectTasks.forEach(((e,t)=>{s(e,t)})),console.log(r),console.log(d),document.querySelectorAll(".remove-task-btn").forEach((e=>{e.addEventListener("click",(()=>{n.splice(e.getAttribute("data"),1),o()}))}))}function s(t,n){const c=document.querySelector(".user-tasks"),o=document.createElement("div");o.classList.add("user-task"),o.dataset.taskId=t.id;const s=document.createElement("p");s.classList.add("project-title"),s.innerText=`${t.description}`,o.append(s);const d=document.createElement("p");d.classList.add("task-date"),d.innerText=`${t.dueDate}`,o.append(d);const l=document.createElement("p");l.classList.add("task-priority"),l.innerText=`${t.priority}`,o.append(l);const a=document.createElement("p");a.classList.add("project-folder"),a.innerText=`${t.projectName}`,o.append(a);const r=document.createElement("button");r.setAttribute("data",n),r.classList.add("remove-task-btn"),r.textContent="Delete",o.appendChild(r),t.id===e&&o.classList.add("selected-task"),c.append(o)}t.addEventListener("click",(t=>{e=t.target.dataset.taskId,o(),console.log(e)}));let d=null;const l=document.querySelector("[data-user-projects]"),a=document.querySelector(".all-tasks");let r=[];class i{constructor(e,t){this.id=e,this.projectTitle=t,this.projectTasks=[]}}function u(){const e=document.getElementById("taskProject");l.textContent="",e.textContent="",function(){const e=document.getElementById("taskProject"),t=document.createElement("option");t.value="1",t.setAttribute("id","All Tasks"),t.textContent="All Tasks",t.setAttribute("selected","true"),e.appendChild(t)}(),r.forEach(((e,t)=>{!function(e,t){const n=document.querySelector("[data-user-projects]"),c=document.createElement("div");c.classList.add("user-project"),c.setAttribute("id",`${e.projectTitle}`),c.dataset.projectId=e.id;const o=document.createElement("p");o.classList.add("project-title"),o.innerText=e.projectTitle,c.append(o);const s=document.createElement("button");s.setAttribute("data",t),s.classList.add("remove-project-btn"),s.textContent="Delete",c.appendChild(s),e.id===d&&c.classList.add("selected"),n.append(c)}(e,t)})),r.forEach((t=>{let n=document.createElement("option");n.value=t.id,n.innerText=t.projectTitle,n.id=t.projectTitle,e.appendChild(n)})),console.log(r),document.querySelectorAll(".remove-project-btn").forEach((e=>{e.addEventListener("click",(()=>{r.splice(e.getAttribute("data"),1),u()}))})),console.log(n)}l.addEventListener("click",(e=>{"div"===e.target.tagName.toLowerCase()&&(d=e.target.dataset.projectId,a.classList.remove("selected"),console.log(d),u(),o())})),a.addEventListener("click",(e=>{d="1",a.classList.add("selected"),u(),o(),console.log(d)})),function(){const e=document.getElementById("newProjectBtn"),t=document.getElementById("project-submit-btn"),n=document.getElementById("project-cancel-btn");e.addEventListener("click",(()=>{document.getElementById("projectForm").style.display="block",document.getElementById("newProjectBtn").style.display="none",document.getElementById("projectInput").focus()})),t.addEventListener("click",(()=>{document.getElementById("projectForm").style.display="none",document.getElementById("newProjectBtn").style.display="block"})),n.addEventListener("click",(()=>{document.getElementById("projectForm").style.display="none",document.getElementById("newProjectBtn").style.display="block",document.getElementById("projectForm").reset()}))}(),function(){const e=document.getElementById("taskFormDispBtn"),t=document.getElementById("task-submit-btn"),n=document.getElementById("task-cancel-btn"),c=document.querySelector(".modal"),o=document.querySelector(".overlay"),s=()=>{c.classList.remove("active"),o.classList.remove("active")};e.onclick=()=>{c.classList.add("active"),o.classList.add("active"),document.getElementById("taskDescription").focus()},t.onclick=s,o.onclick=s,n.addEventListener("click",(()=>{s(),document.getElementById("taskForm").reset()}))}(),function(){const e=document.querySelector("[data-new-project-form]"),t=document.querySelector("[data-new-project-input]");e.addEventListener("submit",(e=>{if(e.preventDefault(),null==t||""===t)return;let n=Date.now().toString();const c=new i(n,t.value);t.value=null,r.push(c),u()}))}(),function(){const e=document.getElementById("taskForm"),t=document.querySelector("#taskDescription"),s=document.querySelector("#taskDueDate"),d=document.querySelector("#priorityLevel"),l=document.getElementById("taskProject");e.addEventListener("submit",(e=>{if(e.preventDefault(),null==t||""===t)return;let a=Date.now().toString();if(null==l.value||"1"==l.value){const e=new c(a,t.value,s.value,d.value,l.value,"All Tasks");n.push(e)}else{const e=new c(a,t.value,s.value,d.value,l.value,l.options[l.selectedIndex].id);r.find((e=>e.id===l.value)).projectTasks.push(e),n.push(e)}document.getElementById("taskForm").reset(),o()}))}()})();