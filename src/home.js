import { clearElement, projects } from "./index";

function renderHome() {
  const content = document.querySelector(".content");
  clearElement(content);

  const priorityH2 = document.createElement("h2");
  priorityH2.textContent = "High Priority Tasks";
  content.append(priorityH2);

  const pTable = document.createElement("table");
  content.append(pTable);
  const trHead = document.createElement("tr");
  pTable.append(trHead);
  const hName = document.createElement("th");
  hName.textContent = "Name";
  const hProject = document.createElement("th");
  hProject.textContent = "Project";
  const hDueDate = document.createElement("th");
  hDueDate.textContent = "Due Date";
  hDueDate.classList.add("hideMobile");
  const hPriority = document.createElement("th");
  hPriority.textContent = "Priority";
  trHead.append(hName, hProject, hDueDate, hPriority);

  projects.forEach((project) => {
    const currentProjectName = project.name;
    project.tasks.forEach((task) => {
      if (task.priority == "High") {
        const tr = document.createElement("tr");
        pTable.append(tr);
        const dName = document.createElement("td");
        dName.textContent = task.title;
        const dProject = document.createElement("td");
        dProject.textContent = currentProjectName;
        const dDueDate = document.createElement("td");
        dDueDate.textContent = task.dueDate;
        dDueDate.classList.add("hideMobile");
        const dPriority = document.createElement("td");
        dPriority.textContent = task.priority;
        tr.append(dName, dProject, dDueDate, dPriority);
      }
    });
  });
}

export { renderHome };
