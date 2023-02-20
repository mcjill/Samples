// Select the task list and form elements
const taskList = document.getElementById('task-list');
const taskForm = document.getElementById('task-form');

// Add a task when the form is submitted
taskForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Get the task text from the input field
  const taskText = document.getElementById('task-input').value.trim();
  
  // Check if the task text is not empty
  if (taskText) {
    // Create a new list item for the task
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item', 'flex', 'justify-between', 'p-2', 'rounded-lg', 'shadow-lg', 'bg-white', 'my-2', 'pop');
    taskItem.innerHTML = `
      <span class="flex-1 ml-2 text-gray-800">${taskText}</span>
      <button class="edit-btn p-1 rounded-full bg-gray-300 mr-2"><i class="fas fa-edit"></i></button>
      <button class="delete-btn p-1 rounded-full bg-red-500"><i class="fas fa-trash-alt"></i></button>
    `;
    
    // Add the task item to the task list
    taskList.appendChild(taskItem);
    // Clear the input field
    taskForm.reset();
  }
});

// Edit a task when the edit button is clicked
taskList.addEventListener('click', function(event) {
  if (event.target.classList.contains('edit-btn')) {
    const taskItem = event.target.parentElement;
    const taskText = taskItem.querySelector('.flex-1').textContent;
    
    // Replace the task text with an input field
    taskItem.innerHTML = `
      <input type="text" class="w-full p-2 rounded-lg shadow-lg" value="${taskText}">
      <button class="update-btn p-1 rounded-full bg-green-500 mr-2"><i class="fas fa-check"></i></button>
      <button class="cancel-btn p-1 rounded-full bg-red-500"><i class="fas fa-times"></i></button>
    `;
  }
});

// Update a task when the update button is clicked
taskList.addEventListener('click', function(event) {
  if (event.target.classList.contains('update-btn')) {
    const taskItem = event.target.parentElement;
    const taskText = taskItem.querySelector('input').value;
    
    // Replace the input field with the updated task text
    taskItem.innerHTML = `
      <span class="flex-1 ml-2 text-gray-800">${taskText}</span>
      <button class="edit-btn p-1 rounded-full bg-gray-300 mr-2"><i class="fas fa-edit"></i></button>
      <button class="delete-btn p-1 rounded-full bg-red-500"><i class="fas fa-trash-alt"></i></button>
    `;
  }
});

// Cancel editing a task when the cancel button is clicked
taskList.addEventListener('click', function(event) {
  if (event.target.classList.contains('cancel-btn')) {
    const taskItem = event.target.parentElement;
    const taskText = taskItem.querySelector('input').value;
    
    // Replace the input field with the original task text
    taskItem.innerHTML = `
      <span class="flex-1 ml-2 text-gray-800">${taskText}</span>
      <button class="edit-btn p-1 rounded-full bg-gray-300 mr-2"><i class="fas fa-edit"></i></button>
      <button class="delete-btn p-1 rounded-full bg-red-500"><i class="fas fa-trash-alt"></i></button>
    `;
  }
});

// Delete a task when the delete button is clicked
taskList.addEventListener('click', function(event) {
  if (event.target.classList.contains('delete-btn')) {
    const taskItem = event.target.parentElement;
    taskItem.remove();
  }
});
