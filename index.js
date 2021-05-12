// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
inquirer.prompt([
  {
    type: "input",
    message: "What was your motivation?",
    name: "",
  },

  {
    type: "input",
    message: "Why did you build this project?",
    name: "",
  },

  {
    type: "input",
    message: "What problem does it solve",
    name: "",
  },

  {
    type: "input",
    message: "What did you learn?",
    name: "",
  },

  {
    type: "input",
    message: "What makes your project stand out?",
    name: "",
  },
]);
// const questions = [];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
inquirer.prompt(questions).then((res) => {
  fs.writeToFile("");
});

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
