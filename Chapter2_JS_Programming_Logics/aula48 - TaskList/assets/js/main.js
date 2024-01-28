const inputTask = document.querySelector('.input-task');
const btnTask = document.querySelector('.btn-task');
const tasks = document.querySelector('.tasks');

function createTask(textInput){
    const li = createLi();
    li.innerText =  textInput;
    tasks.appendChild(li); 
    cleanInput();
    createDeleteBtn(li);
    saveTasks();
}

function createLi(){
    const li = document.createElement('li');
    return li;
}

function createDeleteBtn(li){
    li.innerText += ' '
    const btnDelete = document.createElement('button');
    //btnDelete.classList.add('delete-task');
    btnDelete.innerText = 'Delete';
    btnDelete.setAttribute('class', 'delete-task');
    btnDelete.setAttribute('title', 'Delete Task');
    li.appendChild(btnDelete)
}

function cleanInput(){
    inputTask.value = '';
    inputTask.focus();
}

function saveTasks(){
    const liTask = tasks.querySelectorAll('li');
    const listTask = [];

    for(let task of liTask){
        let taskText = task.innerText;
        taskText = taskText.replace('Delete', '').trim();
        listTask.push(taskText);
    }
    const taskJSON = JSON.stringify(listTask);
    localStorage.setItem('tasks', taskJSON);
    console.log(taskJSON)
   
}

function addSavedTask(){
    const tasks = localStorage.getItem('tasks');
    const taskList = JSON.parse(tasks);
    
    for (let task of taskList){
        createTask(task);
    }
}

addSavedTask()

inputTask.addEventListener('keypress', (e) => {
    if(e.keyCode === 13){
        if(!inputTask.value) return; // If the value is empty doesnt return nothing;
        createTask(inputTask.value);
    }
});

btnTask.addEventListener('click', function(e){
    const addTask = inputTask.value;
    if(!inputTask.value) return; // If the value in empty doesnt return nothing;
    createTask(addTask);
});

document.addEventListener('click', function(e) {
    const el = e.target;

    if(el.classList.contains('delete-task')){
        el.parentElement.remove();
        saveTasks();
    }
});