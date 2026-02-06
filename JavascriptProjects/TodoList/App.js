console.log('TodoList App');

function SaveTodo() {
    let taskInput = document.getElementById('textInput');
    let taskInputValue = taskInput.value.trim();
    let taskLists = document.getElementById('taskList');
    let taskList = document.createElement('li');
    taskList.textContent = taskInputValue;
    if (taskInput.value === '') {
        alert('Enter todo list');
        return
    }
    taskLists.appendChild(taskList);
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete Todo';
    deleteBtn.addEventListener('click', () => {
        taskLists.removeChild(taskList);
        taskLists.removeChild(deleteBtn);
    })
    taskLists.appendChild(deleteBtn);
    
    
    taskInput.value = '';
}