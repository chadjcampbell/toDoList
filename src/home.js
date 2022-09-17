import { clearElement, projects } from './index'

function renderHome () {
    const content = document.querySelector('.content')
    clearElement(content)

    const weekH2 = document.createElement('h2')
    weekH2.textContent = 'Due This Week'
    content.append(weekH2)

    const priorityH2 = document.createElement('h2')
    priorityH2.textContent = 'High Priority'
    content.append(priorityH2)
}

export { renderHome }