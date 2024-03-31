#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// Initialize an empty array to store to-do list items
 let todoArray = [];
// Set initial condition for the loop
let condition = true;
// Start a loop to continuously prompt the user for tasks
while(condition)
{
     // Prompt the user to enter a task
 let addTask = await inquirer.prompt([
    {
        name: "todo",
        type: "input",
        message: chalk.white.bold("what do you want add to the todo list?"),
        transformer: (input) => {
            return chalk.italic.blue.bold(input.toString());
        },

    },

    {
        name: "addmore",
        type: "confirm",
        message: chalk.white.bold("Do you want to more add tasks to the todo list?"),
        default: false,
       
        
    },
]
);
// Add the task to the array if it's not empty
if(addTask.todo.trim() !== ""){
    todoArray.push(addTask.todo);
}
 // Log the current to-do list
console.log(chalk.italic.blue.bold(todoArray.join(' , ')));

    // Update the condition based on user's choice to add more tasks
condition = addTask.addmore;
};

// Display the final to-do list

console.log(chalk.italic.magenta.bold(`\n\tHere is your Final todo list\n\t`));

todoArray.forEach((todoArray, index) =>{

    console.log(chalk.italic.green.bold(`${index + 1}. ${todoArray}`));
});

