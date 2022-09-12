import '../src/style.scss';

const projectList = document.querySelector('#projectList')
const projectForm = document.querySelector('#projectForm')
const projectInput = document.querySelector('#projectInput')

const LOCAL_STORAGE_KEY = 'todo.projects'
const LOCAL_STORAGE_PROJECT_ID = 'todo.projectId'
let projects =  JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [{id: 0, name: 'Home', tasks: []}, {id: 1, name: 'General', tasks: []}]
let projectId = localStorage.getItem(LOCAL_STORAGE_PROJECT_ID)

projectList.addEventListener('click', event => {
    if (event.target.tagName.toLowerCase() == 'li') {
        projectId = event.target.dataset.projectId
        renderProjects()
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

function createProject(name) {
    return {id: Date.now(), name: name, tasks: []}
}

function saveProjects() {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(projects))
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