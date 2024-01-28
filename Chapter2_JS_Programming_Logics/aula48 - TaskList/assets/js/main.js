// Selecting DOM elements
const inputTask = document.querySelector('.input-task');
const btnTask = document.querySelector('.btn-task');
const tasksContainer = document.querySelector('.tasks'); // Renamed for clarity

// Function to create a new task
function createTask(textInput){
    const li = createLi(); // Create a new list item
    li.innerText =  textInput; // Set the text of the list item
    tasksContainer.appendChild(li); // Append the new task to the tasks container
    cleanInput(); // Clear the input field
    createDeleteBtn(li); // Create and append the delete button for the task
    saveTasks(); // Save the tasks to localStorage
}

// Function to create a new list item
function createLi(){
    const li = document.createElement('li'); // Create a new list item element
    return li; // Return the new list item
}

// Function to create a delete button for a task
function createDeleteBtn(li){
    li.innerText += ' '; // Add a space before the delete button
    const btnDelete = document.createElement('button'); // Create a new button element
    btnDelete.innerText = 'Delete'; // Set the text of the delete button
    btnDelete.setAttribute('class', 'delete-task'); // Set class and title attributes
    btnDelete.setAttribute('title', 'Delete Task');
    li.appendChild(btnDelete); // Append the delete button to the list item
}

// Function to clear the input field
function cleanInput(){
    inputTask.value = ''; // Set the input field value to an empty string
    inputTask.focus(); // Set focus back to the input field
}

// Function to save tasks to localStorage
function saveTasks(){
    const liTask = tasksContainer.querySelectorAll('li'); // Select all list items
    const listTask = [];

    // Iterate through list items to extract task text
    for(let task of liTask){
        let taskText = task.innerText;
        taskText = taskText.replace('Delete', '').trim();
        listTask.push(taskText);
    }
    
    const taskJSON = JSON.stringify(listTask); // Convert tasks to JSON
    localStorage.setItem('tasks', taskJSON); // Save tasks to localStorage
    console.log(taskJSON); // Log the JSON representation of tasks
}

// Function to add saved tasks from localStorage
function addSavedTask(){
    const tasks = localStorage.getItem('tasks');
    const taskList = JSON.parse(tasks);
    
    // Iterate through saved tasks and create tasks
    for (let task of taskList){
        createTask(task);
    }
}

addSavedTask(); // Add saved tasks when the page loads

// Event listener for Enter key press on the input field
inputTask.addEventListener('keypress', (e) => {
    if(e.keyCode === 13){
        if(!inputTask.value) return; // If the value is empty, do nothing
        createTask(inputTask.value); // Create a task with the input value
    }
});

// Event listener for button click
btnTask.addEventListener('click', function(e){
    const addTask = inputTask.value;
    if(!inputTask.value) return; // If the value is empty, do nothing
    createTask(addTask); // Create a task with the input value
});

// Event listener for clicks on the document
document.addEventListener('click', function(e) {
    const el = e.target;

    // Check if the clicked element has the 'delete-task' class
    if(el.classList.contains('delete-task')){
        el.parentElement.remove(); // Remove the parent list item
        saveTasks(); // Save the updated tasks to localStorage
    }
});
