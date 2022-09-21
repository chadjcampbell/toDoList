import {
  clearElement,
  saveProjects,
  renderProjects,
  createTask,
  projects,
  projectId,
  setProjectId,
} from "./index";
import { renderHome } from "./home";

function renderContent() {
  const content = document.querySelector(".content");
  clearElement(content);

  const currentProject = projects.find((project) => project.id == projectId);

  const currentProjectH2 = document.createElement("h2");
  currentProjectH2.textContent = currentProject.name;
  content.append(currentProjectH2);

  if (currentProject.id > 1) {
    const deleteProjectButton = document.createElement("button");
    deleteProjectButton.textContent = "Delete Project";
    deleteProjectButton.id = "deleteProjectButton";
    content.append(deleteProjectButton);

    deleteProjectButton.addEventListener("click", () => {
      projects.splice(
        projects.findIndex((project) => project.id === currentProject.id),
        1
      );
      setProjectId(0);
      saveProjects();
      renderProjects();
      if (projectId > 0) {
        renderContent();
      } else {
        renderHome();
      }
    });
  }
  function renderTasks() {
    const pTable = document.createElement("table");
    content.append(pTable);
    const trHead = document.createElement("tr");
    pTable.append(trHead);
    const hName = document.createElement("th");
    hName.textContent = "Name";
    const hProject = document.createElement("th");
    hProject.textContent = "Decription";
    hProject.classList.add("hideMobile");
    const hDueDate = document.createElement("th");
    hDueDate.textContent = "Due Date";
    hDueDate.classList.add("hideMobile");
    const hPriority = document.createElement("th");
    hPriority.textContent = "Priority";
    hPriority.classList.add("hideMobile");
    const emptyCell = document.createElement("th");
    trHead.append(
      hName,
      hProject,
      hDueDate,
      hPriority,
      emptyCell.cloneNode(true),
      emptyCell.cloneNode(true)
    );

    currentProject.tasks.forEach((task) => {
      const taskLi = document.createElement("tr");
      pTable.append(taskLi);
      const title = document.createElement("td");
      title.textContent = task.title;
      const description = document.createElement("td");
      description.textContent = task.description;
      description.classList.add("hideMobile");
      const dueDate = document.createElement("td");
      dueDate.textContent = task.dueDate;
      dueDate.classList.add("hideMobile");
      const priority = document.createElement("td");
      priority.textContent = task.priority;
      priority.classList.add("hideMobile");
      taskLi.append(title, description, dueDate, priority);

      const buttonCell = document.createElement("td");
      const editTaskButton = document.createElement("button");
      editTaskButton.textContent = "View/Edit";
      editTaskButton.classList.add("editTaskButton");
      editTaskButton.id = `e${task.id}`;
      taskLi.append(buttonCell);
      buttonCell.append(editTaskButton);

      editTaskButton.addEventListener("click", (event) => {
        const currentTaskId = event.target.id.substring(1);
        const currentTaskObj = currentProject.tasks.find(
          (tasks) => tasks.id == currentTaskId
        );
        openTaskForm(currentTaskObj);
      });

      const buttonCell2 = document.createElement("td");
      const deleteTaskButton = document.createElement("button");
      deleteTaskButton.textContent = "Delete Task";
      deleteTaskButton.classList.add("deleteTaskButton");
      deleteTaskButton.id = task.id;
      taskLi.append(buttonCell2);
      buttonCell2.append(deleteTaskButton);

      deleteTaskButton.addEventListener("click", (event) => {
        currentProject.tasks.splice(
          currentProject.tasks.findIndex(
            (tasks) => tasks.id == event.target.id
          ),
          1
        );
        saveProjects();
        renderContent();
      });
    });
  }
  if (currentProject.id > 0) {
    renderTasks();
  }

  // If currentTaskObj is passed to this, it will act as an edit window
  function openTaskForm(currentTaskObj) {
    const taskForm = document.createElement("form");
    taskForm.id = "taskForm";
    taskForm.reset();
    content.append(taskForm);
    const head = document.createElement("h3");
    head.textContent = "Add New Task";

    const nameLabel = document.createElement("label");
    nameLabel.for = "taskName";
    nameLabel.textContent = "Name";
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.id = "taskName";
    nameInput.name = "taskName";
    nameInput.required = true;

    const descriptionLabel = document.createElement("label");
    descriptionLabel.for = "taskDescription";
    descriptionLabel.textContent = "Description";
    const descriptionInput = document.createElement("input");
    descriptionInput.type = "text";
    descriptionInput.id = "taskDescription";
    descriptionInput.name = "taskDescription";

    const dueDateLabel = document.createElement("label");
    dueDateLabel.for = "taskDueDate";
    dueDateLabel.textContent = "Due Date";
    const dueDateInput = document.createElement("input");
    dueDateInput.type = "date";
    dueDateInput.id = "taskDueDate";
    dueDateInput.name = "taskDueDate";

    const priorityLabel = document.createElement("select");
    priorityLabel.textContent = "Priority";
    priorityLabel.id = "taskPriority";
    priorityLabel.name = "taskPriority";

    const low = document.createElement("option");
    low.selected = true;
    low.value = "Low";
    low.textContent = "Low";
    const medium = document.createElement("option");
    medium.value = "Medium";
    medium.textContent = "Medium";
    const high = document.createElement("option");
    high.value = "High";
    high.textContent = "High";

    const taskSubmit = document.createElement("button");
    taskSubmit.id = "taskFormSubmit";
    taskSubmit.type = "submit";
    taskSubmit.textContent = "Submit";

    const taskCancel = document.createElement("button");
    taskCancel.id = "taskFormCancel";
    taskCancel.textContent = "Cancel";

    taskForm.append(
      head,
      nameLabel,
      nameInput,
      descriptionLabel,
      descriptionInput,
      dueDateLabel,
      dueDateInput,
      priorityLabel,
      taskSubmit,
      taskCancel
    );
    priorityLabel.append(low, medium, high);

    taskForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (nameInput.value == "" || nameInput.value == null) return;
      if (currentTaskObj.title != undefined) {
        currentProject.tasks.splice(
          currentProject.tasks.findIndex(
            (tasks) => tasks.id == currentTaskObj.id
          ),
          1
        );
      }
      const newTask = createTask(
        nameInput.value,
        descriptionInput.value,
        dueDateInput.value,
        priorityLabel.value
      );
      currentProject.tasks.push(newTask);
      saveProjects();
      renderContent();
    });

    taskCancel.addEventListener("click", (event) => {
      event.preventDefault();
      taskForm.style.display = "none";
    });
    // This fills the fields to view/edit
    if (currentTaskObj.title != undefined) {
      head.textContent = "View/Edit Task";
      nameInput.value = currentTaskObj.title;
      descriptionInput.value = currentTaskObj.description;
      dueDateInput.value = currentTaskObj.dueDate;
      priorityLabel.value = currentTaskObj.priority;
    }
  }

  function addTask() {
    const addTaskButton = document.createElement("button");
    addTaskButton.id = "addTaskButton";
    addTaskButton.textContent = "+ New Task";
    content.append(addTaskButton);

    addTaskButton.addEventListener("click", openTaskForm);
  }
  if (currentProject.id > 0) {
    addTask();
  }
}

export { renderContent };
