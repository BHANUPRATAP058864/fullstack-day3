
function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value.trim();
  
    if (todoText === '') return; 
  
    const todoList = document.getElementById('todo-list');
  
    
    const listItem = document.createElement('li');
  
    
    const taskText = document.createElement('span');
    taskText.textContent = todoText;
    taskText.onclick = () => taskText.classList.toggle('completed'); 
    listItem.appendChild(taskText);
  
    
    const removeBtn = document.createElement('span');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';
    removeBtn.onclick = () => todoList.removeChild(listItem);
    listItem.appendChild(removeBtn);
  
    
    todoList.appendChild(listItem);
  
    
    todoInput.value = '';
  }