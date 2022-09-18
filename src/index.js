import '../src/style.scss';
import { renderContent } from './dom';
import { renderHome } from './home';

const projectList = document.querySelector('#projectList')
const projectForm = document.querySelector('#projectForm')
const projectInput = document.querySelector('#projectInput')

const LOCAL_STORAGE_KEY = 'todo.projects'
const LOCAL_STORAGE_PROJECT_ID = 'todo.projectId'

let projects =  JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || 
[{"id":0,"name":"Home","tasks":[]},{"id":1,"name":"General","tasks":[{"pId":2,"id":4,"title":"Test Task","description":"This is a test","dueDate":"10/31/2022","priority":"Low"},{"pId":"1","id":1663532517642,"title":"Test Num 2","description":"This is another test","dueDate":"No due date","priority":"High"}]},{"id":1663525622897,"name":"School","tasks":[{"pId":"1663525622897","id":1663532484771,"title":"ES6 Modules","description":"Learn ins and outs of modules","dueDate":"2022-09-30","priority":"High"}]},{"id":1663525691392,"name":"Work","tasks":[{"pId":"1663525691392","id":1663525718661,"title":"TPS Reports","description":"Get these to Lumbergh stat!","dueDate":"2022-09-26","priority":"High"}]}]


let projectId = localStorage.getItem(LOCAL_STORAGE_PROJECT_ID) || 0

function setProjectId(value) {
    projectId = value
}

projectList.addEventListener('click', event => {
    if (event.target.tagName.toLowerCase() == 'li') {
        projectId = event.target.dataset.projectId
        if (projectId == 0) {
            saveProjects()
            renderProjects()
            renderHome()
            return
        }
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

if (projectId > 0) { renderContent() }
else { renderHome() }

export { projects, projectId, setProjectId ,clearElement, saveProjects, renderProjects, createProject, createTask}