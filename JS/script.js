const todoInput = document.querySelector('.todo-input')
const ulList = document.querySelector('ul')
const errorInfo = document.querySelector('.error-info')
const addBtn = document.querySelector('.btn-add')
const popup = document.querySelector('.popup')
const popupInput = document.querySelector('.popup-input')
const popupCancel = popup.querySelector('.cancel')
const popupAccept = popup.querySelector('.accept')
const popupInfo = popup.querySelector('.popup-info')
let newTodo
let todoToEdit

const addNewTodo = () => {
    if(todoInput.value !== '') {
        newTodo = document.createElement('li')
        newTodo.textContent = todoInput.value
        createToolsArea()
        ulList.append(newTodo)

        todoInput.value = ''
        errorInfo.textContent = ''
    } else {
        errorInfo.textContent = 'Wpisz treść zadania'
    }
}

const createToolsArea = () => {
    const tools = document.createElement('div')
    tools.classList.add('tools')
    newTodo.append(tools)

    const completeBtn = document.createElement('button')
    completeBtn.classList.add('complete')
    completeBtn.innerHTML = '<i class="fas fa-check"></i>'

    const editBtn = document.createElement('button')
    editBtn.classList.add('edit')
    editBtn.textContent = 'EDIT'

    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete')
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>'

    tools.append(completeBtn, editBtn, deleteBtn)
}

const checkClick = e => {
    if(e.target.matches('.fa-check')) {
        e.target.closest('li').classList.toggle('completed')
    } else if (e.target.matches('.fa-times')) {
        deleteTodo(e)
    } else if (e.target.matches('.edit')) {
        editTodo(e)
    }
}

const editTodo = (e) => {
    todoToEdit = e.target.closest('li')
    popupInput.value = todoToEdit.firstChild.textContent
    popup.style.display = 'flex'
}

const changeTodoText = () => {
    if(popupInput.value !== '') {
        todoToEdit.firstChild.textContent = popupInput.value
        closePopup()
    } else {
        popupInfo.textContent = 'Muisz podać zadanie'
    }
}

const closePopup = () => {
    popup.style.display = 'none'
}

const deleteTodo = (e) => {
    e.target.closest('li').remove()
    errorInfo.textContent = 'Brak zadań na liście.'
}

addBtn.addEventListener('click', addNewTodo)
ulList.addEventListener('click', checkClick)
popupCancel.addEventListener('click', closePopup)
popupAccept.addEventListener('click', changeTodoText)