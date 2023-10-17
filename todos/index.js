
const todoList = require('./todos');

// Test adding a task
todoList.addTask('Task 1');


// Test updating a task
todoList.updateTask('1', 'Updated Task 1');

// Test deleting a task
todoList.deleteTask('1');
/*
const Todos = require('./todos');
const readline = require('readline');
const { v4: uuidv4 } = require('uuid');

// Create an instance of readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Todo List array to store tasks
let todoList = [];

// Add a task to the Todo List
function addTask(task) {
  const newTask = {
    id: uuidv4(),
    task
  };
  todoList.push(newTask);
  console.log('Task added successfully');
  displayPrompt();
}

// Update a task in the Todo List
function updateTask(taskId, updatedTask) {
  const taskIndex = todoList.findIndex(task => task.id === taskId);
  if (taskIndex !== -1) {
    todoList[taskIndex].task = updatedTask;
    console.log('Task updated successfully');
  } else {
    console.log('Task not found');
  }
  displayPrompt();
}

// Delete a task from the Todo List
function deleteTask(taskId) {
  const taskIndex = todoList.findIndex(task => task.id === taskId);
  if (taskIndex !== -1) {
    const deletedTask = todoList.splice(taskIndex, 1);
    console.log('Task deleted successfully');
  } else {
    console.log('Task not found');
  }
  displayPrompt();
}

// Display the command prompt
function displayPrompt() {
  rl.question('Enter a command (add/update/delete/exit): ', (command) => {
    if (command === 'exit') {
      rl.close();
    } else if (command === 'add') {
      rl.question('Enter the task: ', (task) => {
        addTask(task);
      });
    } else if (command === 'update') {
      rl.question('Enter the task ID: ', (taskId) => {
        rl.question('Enter the updated task: ', (updatedTask) => {
          updateTask(taskId, updatedTask);
        });
      });
    } else if (command === 'delete') {
      rl.question('Enter the task ID: ', (taskId) => {
        deleteTask(taskId);
      });
    } else {
      console.log('Invalid command');
      displayPrompt();
    }
  });
}

// Start the command-line interface
console.log('Todo List Command-Line Interface');
displayPrompt()



*/

