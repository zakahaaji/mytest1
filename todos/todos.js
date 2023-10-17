/*
const fs = require('fs');

const readline = require('readline');

// Create an instance of readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Define the path to the data file
const dataFilePath = './todoData.json';

// Load the Todo List data from the file
function loadTodoList() {
  try {
    const data = fs.readFileSync(dataFilePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

// Save the Todo List data to the file
function saveTodoList(todoList) {
  try {
    const data = JSON.stringify(todoList, null, 2);
    fs.writeFileSync(dataFilePath, data);
  } catch (error) {
    console.error('Error saving Todo List data:', error);
  }
}

// Add a task to the Todo List
function addTask(task) {
  const todoList = loadTodoList();
  const newTask = {
    id: todoList.length + 1,
    task
  };
  todoList.push(newTask);
  saveTodoList(todoList);
  console.log('Task added successfully');
  displayPrompt();
}

// Update a task in the Todo List
function updateTask(taskId, updatedTask) {
  const todoList = loadTodoList();
  const taskIndex = todoList.findIndex(task => task.id === taskId);
  if (taskIndex !== -1) {
    todoList[taskIndex].task = updatedTask;
    saveTodoList(todoList);
    console.log('Task updated successfully');
  } else {
    console.log('Task not found');
  }
  displayPrompt();
}

// Delete a task from the Todo List
function deleteTask(taskId) {
  const todoList = loadTodoList();
  const taskIndex = todoList.findIndex(task => task.id === taskId);
  if (taskIndex !== -1) {
    const deletedTask = todoList.splice(taskIndex, 1);
    saveTodoList(todoList);
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
          updateTask(parseInt(taskId), updatedTask);
        });
      });
    } else if (command === 'delete') {
      rl.question('Enter the task ID: ', (taskId) => {
        deleteTask(parseInt(taskId));
      });
    } else {
      console.log('Invalid command');
      displayPrompt();
    }
  });
}

// Start the command-line interface
console.log('Todo List Command-Line Interface');
displayPrompt();  
*/


const fs = require('fs');
const readline = require('readline');
 //const { v4: uuidv4 } = require('uuid')

// Create an instance of readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Define the path to the data file
const dataFilePath = './todoData.json';
// Load the Todo List data from the file
function loadTodoList() {
  try {
    const data = fs.readFileSync(dataFilePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

// Save the Todo List data to the file
function saveTodoList(todoList) {
  try {
    const data = JSON.stringify(todoList, null, 2);
    fs.writeFileSync(dataFilePath, data);
  } catch (error) {
    console.error('Error saving Todo List data:', error);
  }
}

// Add a task to the Todo List
function addTask(task) {
  const todoList = loadTodoList();
  const newTask = {
    //  id: uuidv4()
     id: todoList.length+1,
     
    task
  };
  todoList.push(newTask);
  saveTodoList(todoList);
  console.log('Task added successully');
  displayPrompt();
}

// Update a task in the Todo List
function updateTask(taskIndex,updateTask) {
   const todoList = loadTodoList();
   const taskIndex = todoList.findIndex(task => task.taskId === task);
  if (taskIndex !== -1) {
    todoList[taskIndex].task = updateTask;
    saveTodoList(todoList);
    console.log('Task updated successfully');
  } else {
    console.log('update task not found ');
  }
   displayPrompt();
}


 


// Delete a task from the Todo List
function deleteTask(taskId) {
  const todoList = loadTodoList();
  const taskIndex = todoList.findIndex(task => task.id === taskId);
  if (taskIndex !== -1) {
    saveTodoList(todoList);
     console.log('Task deleted successfully');
  } else {
    console.log('Task not found');
  }
  displayPrompt();
}

function displayTodoList() {
    const todoList = loadTodoList();
    if (todoList.length === 0) {
      console.log('Todo List is empty');
    } else {
      console.log('Todo List:');
      todoList.forEach(task => {
        console.log(`ID: ${task.id}, Task: ${task.task}`);
      });
    }
     displayPrompt();
  }



// Display the command prompt
function displayPrompt() {
  rl.question('Enter a command (add/update/delete/display/exit): ', (command) => {
    if (command === 'exit') {
      rl.close();
    } else if (command === 'add') {
      rl.question('Enter the task: ', (task) => {
        addTask(task);
      });
    } else if (command === 'update') {
      rl.question('Enter the task ID: ', (taskId) => {
        rl.question('Enter the updated task: ', (updatedTask) => {
          updateTask();
          console.log("Task updated sucssessfully");

        });
      });
    } else if (command === 'delete') {
      rl.question('Enter the task ID: ', (taskId) => {
        deleteTask(taskId);
        console.log("Task deleted sucssessfully");
      });
    } else if (command === 'display') {
        displayTodoList();
      } 
      else {
        console.log('Invalid command');
        displayPrompt();
      }
    });
  }
    
 

// Start the command-line interface
console.log('follow the instruction below to this todoList:');
// displayPrompt();

module.exports = {
  addTask,
  updateTask,
  deleteTask
};


/* const express = require('express');

 const bodyParser = require('body-parser');

 //Create an instance of Express app
const app = express();

 //Middleware for parsing JSON data
app.use(bodyParser.json());

// Todo List array to store tasks
let todoList = [];

// Add a task to the Todo List
app.post('/tasks', (req, res) => {
  const task = req.body;
  todoList.push(task);
  res.json({ message: 'Task added successfully', task });
});

// Update a task in the Todo List
app.put('/tasks/:taskId', (req, res) => {
  const taskId = req.params.taskId;
  const updatedTask = req.body;

  // Find the task by taskId and update it
  const taskIndex = todoList.findIndex(task => task.id === taskId);
  if (taskIndex !== -1) {
    todoList[taskIndex] = { ...todoList[taskIndex], ...updatedTask };
    res.json({ message: 'Task updated successfully', task: todoList[taskIndex] });
  } else {
    res.status(404).json({ error: 'Task not found' });
  }
});

// Delete a task from the Todo List
app.delete('/tasks/:taskId', (req, res) => {
  const taskId = req.params.taskId;

  // Find the task by taskId and remove it
  const taskIndex = todoList.findIndex(task => task.id === taskId);
  if (taskIndex !== -1) {
    const deletedTask = todoList.splice(taskIndex, 1);
    res.json({ message: 'Task deleted successfully', task: deletedTask });
  } else {
    res.status(404).json({ error: 'Task not found' });
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});*/


/*
const readline = require('readline');

class TodoList {
  constructor() {
    this.tasks = [];
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }

  addTask(task) {
    this.tasks.push(task);
    console.log("Task added successfully.");
  }

  updateTask(taskIndex, newTask) {
    if (taskIndex < 0 || taskIndex >= this.tasks.length) {
      console.log("Invalid task index.");
      return;
    }

    this.tasks[taskIndex] = newTask;
    console.log("Task updated successfully.");
  }

  deleteTask(taskIndex) {
    if (taskIndex < 0 || taskIndex >= this.tasks.length) {
      console.log("Invalid task index.");
      return;
    }

    this.tasks.splice(taskIndex, 1);
    console.log("Task deleted successfully.");
  }

  displayTasks() {
    console.log("Tasks:");
    this.tasks.forEach((task, index) => {
      console.log(`${index + 1}. ${task}`);
    });
  }

  start() {
    console.log("Todo List Application");
    console.log("Enter 'add' to add a task.");
    console.log("Enter 'update' to update a task.");
    console.log("Enter 'delete' to delete a task.");
    console.log("Enter 'display' to display all tasks.");
    console.log("Enter 'exit' to exit the application.");

    this.rl.on('line', (input) => {
      const command = input.trim().toLowerCase();

      if (command === 'add') {
        this.rl.question("Enter the task: ", (task) => {
          this.addTask(task);
          this.rl.prompt();
        });
      } else if (command === 'update') {
        this.rl.question("Enter the task index to update: ", (index) => {
          const taskIndex = parseInt(index) - 1;
          this.rl.question("Enter the new task: ", (newTask) => {
            this.updateTask(taskIndex, newTask);
            this.rl.prompt();
          });
        });
      } else if (command === 'delete') {
        this.rl.question("Enter the task index to delete: ", (index) => {
          const taskIndex = parseInt(index) - 1;
          this.deleteTask(taskIndex);
          this.rl.prompt();
        });
      } else if (command === 'display') {
        this.displayTasks();
        this.rl.prompt();
      } else if (command === 'exit') {
        this.rl.close();
      } else {
        console.log("Invalid command. Please try again.");
        this.rl.prompt();
      }
    });

    this.rl.prompt();
  }
}

// Example usage:
const myTodoList = new TodoList();
myTodoList.start();
*/