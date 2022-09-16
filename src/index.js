import '../src/style.scss';

const projectList = document.querySelector('#projectList')
const projectForm = document.querySelector('#projectForm')
const projectInput = document.querySelector('#projectInput')

const LOCAL_STORAGE_KEY = 'todo.projects'
const LOCAL_STORAGE_PROJECT_ID = 'todo.projectId'

let projects =  JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || 
[{id: 0, name: 'Home', tasks: []}, 
{id: 1, name: 'General', tasks: [{pId: 2, id: 4, title: 'Test Task', description: 'This is a test', dueDate: '10/31/2022', priority: 'Low' }, {pId: 3, id: 5, title: 'Test Num 2', description: 'This is another test', dueDate: '10/25/2022', priority: 'Medium' }]}]

let projectId = localStorage.getItem(LOCAL_STORAGE_PROJECT_ID) || 0

projectList.addEventListener('click', event => {
    if (event.target.tagName.toLowerCase() == 'li') {
        projectId = event.target.dataset.projectId
        saveProjects()
        renderProjects()
        renderContent()
    }
})

projectForm.addEventListener('submit', event => {
    event.preventDefault()
    const projectName = projectInput.value
    if (projectName === '' || projectName === null) return
    const project = createProject(projectName)
    projectInput.value = null
    projects.push(project)
    saveProjects()
    renderProjects()
})

function createTask(title, description, dueDate , priority) {
    if (description == '') description = 'No description'
    if (dueDate == '') dueDate = 'No due date'
    return {pId: projectId, id: Date.now(), title, description, dueDate, priority}
}

function createProject(name) {
    return {id: Date.now(), name: name, tasks: []}
}

function saveProjects() {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(projects))
    localStorage.setItem(LOCAL_STORAGE_PROJECT_ID, projectId)
}

function renderProjects () {
    clearElement(projectList)
    projects.forEach(project => {
        const newProject = document.createElement('li')
        newProject.dataset.projectId = project.id
        newProject.textContent = project.name
        if (project.id == projectId) {
            newProject.classList.add('active')
        }
        projectList.append(newProject)
    })

}

function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild)
    }
}

renderProjects()


//Projects pages

const content = document.querySelector('.content')

function renderContent () {
    clearElement(content)

    const currentProject = projects.find(project => {
        return project.id == projectId
    })

    const currentProjectH2 = document.createElement('h2')
    currentProjectH2.textContent = currentProject.name
    content.append(currentProjectH2)

    if (currentProject.id > 1) {
        const deleteProjectButton = document.createElement('button')
        deleteProjectButton.textContent = 'Delete Project'
        deleteProjectButton.id = 'deleteProjectButton'
        content.append(deleteProjectButton)

        deleteProjectButton.addEventListener('click', () => {
            projects.splice(projects.findIndex(project => project.id === currentProject.id), 1)
            projectId = 0
            saveProjects()
            renderProjects()
            renderContent()
        })
    }
    function renderTasks () {

        const headTaskLi = document.createElement('li')
        headTaskLi.id = 'headTaskLi'
        content.append(headTaskLi)
        const headTitle = document.createElement('h3')
        headTitle.textContent = 'Name'
        const headDescription = document.createElement('h6')
        headDescription.textContent = 'Description'
        const headDueDate = document.createElement('h6')
        headDueDate.textContent = 'Due Date'
        const headPriority = document.createElement('h6')
        headPriority.textContent = 'Priority'
        const placer = document.createElement('h6')
        placer.textContent = 'this is a placeholder space, should have used a table :-P'
        placer.style.visibility = 'hidden'
        headTaskLi.append(headTitle, headDescription, headDueDate, headPriority, placer)

        currentProject.tasks.forEach(task => {
            const taskLi = document.createElement('li')
            content.append(taskLi)
            const title = document.createElement('h3')
            title.textContent = task.title
            const description = document.createElement('h6')
            description.textContent = task.description
            const dueDate = document.createElement('h6')
            dueDate.textContent = task.dueDate
            const priority = document.createElement('h6')
            priority.textContent = task.priority
            taskLi.append(title, description, dueDate, priority)

            const editTaskButton = document.createElement('button')
            editTaskButton.textContent = 'View/Edit'
            editTaskButton.classList.add('editTaskButton')
            editTaskButton.id = 'e' + task.id
            taskLi.append(editTaskButton)

            editTaskButton.addEventListener('click', event =>{
                const currentTaskId = event.target.id.substring(1)
                const currentTaskObj = currentProject.tasks.find(tasks => tasks.id == currentTaskId)
                openTaskForm(currentTaskObj)
            })

            const deleteTaskButton = document.createElement('button')
            deleteTaskButton.textContent = 'Delete Task'
            deleteTaskButton.classList.add('deleteTaskButton')
            deleteTaskButton.id = task.id
            taskLi.append(deleteTaskButton)

            deleteTaskButton.addEventListener('click', event => {
                currentProject.tasks.splice(currentProject.tasks.findIndex(tasks => tasks.id == event.target.id), 1)
                saveProjects()
                renderContent()
            })
        })
    }
    if (currentProject.id > 0) { renderTasks() }

    // If currentTaskObj is passed to this, it will act as an edit window
    function openTaskForm (currentTaskObj) {
        const taskForm = document.createElement('form')
        taskForm.id = 'taskForm'
        taskForm.reset()
        content.append(taskForm)
        const head = document.createElement('h3')
        head.textContent = 'Add New Task'

        const nameLabel = document.createElement('label')
        nameLabel.for = 'taskName'
        nameLabel.textContent = 'Name'
        const nameInput = document.createElement('input')
        nameInput.type = 'text'
        nameInput.id = 'taskName'
        nameInput.name = 'taskName'
        nameInput.required = true

        const descriptionLabel = document.createElement('label')
        descriptionLabel.for = 'taskDescription'
        descriptionLabel.textContent = 'Description'
        const descriptionInput = document.createElement('input')
        descriptionInput.type = 'text'
        descriptionInput.id = 'taskDescription'
        descriptionInput.name = 'taskDescription'

        const dueDateLabel = document.createElement('label')
        dueDateLabel.for = 'taskDueDate'
        dueDateLabel.textContent = 'Due Date'
        const dueDateInput = document.createElement('input')
        dueDateInput.type = 'date'
        dueDateInput.id = 'taskDueDate'
        dueDateInput.name = 'taskDueDate'

        const priorityLabel = document.createElement('select')
        priorityLabel.textContent = 'Priority'
        priorityLabel.id = 'taskPriority'
        priorityLabel.name = 'taskPriority'

        const low = document.createElement('option')
        low.selected = true
        low.value = 'Low'
        low.textContent = 'Low'
        const medium = document.createElement('option')
        medium.value = 'Medium'
        medium.textContent = 'Medium'
        const high = document.createElement('option')
        high.value = 'High'
        high.textContent = 'High'

        const taskSubmit = document.createElement('button')
        taskSubmit.id = 'taskFormSubmit'
        taskSubmit.textContent = 'Submit'

        const taskCancel = document.createElement('button')
        taskCancel.id = 'taskFormCancel'
        taskCancel.textContent = 'Cancel'

        taskForm.append(head, nameLabel, nameInput, descriptionLabel, descriptionInput, dueDateLabel, dueDateInput, priorityLabel, taskSubmit, taskCancel)
        priorityLabel.append(low, medium, high)

        taskSubmit.addEventListener('click', event => {
            if (nameInput.value == '' || nameInput.value == null) return 
            if (currentTaskObj.title != undefined) {
                currentProject.tasks.splice(currentProject.tasks.findIndex(tasks => tasks.id == currentTaskObj.id), 1)
            }
            const newTask = createTask(nameInput.value, descriptionInput.value, dueDateInput.value, priorityLabel.value)
            currentProject.tasks.push(newTask)
            saveProjects()
            renderContent()
        })

        taskCancel.addEventListener('click', event => {
            event.preventDefault()
            taskForm.style.display = 'none'
        })

        if (currentTaskObj.title != undefined) {
            head.textContent = 'View/Edit Task'
            nameInput.value = currentTaskObj.title
            descriptionInput.value = currentTaskObj.description
            dueDateInput.value = currentTaskObj.dueDate
            priorityLabel.value = currentTaskObj.priority
        }
    }

    function addTask () {
        const addTaskButton = document.createElement('button')
        addTaskButton.id = 'addTaskButton'
        addTaskButton.textContent = '+ New Task'
        content.append(addTaskButton)

        addTaskButton.addEventListener('click', openTaskForm)
    }
    if (currentProject.id > 0) { addTask() }
}

renderContent()