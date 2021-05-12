// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require('path')
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
inquirer.prompt([
  {
    type: "input",
    message: "Project Title?",
    name: "title",
  },
  
  {
    type: "input",
    message: "Project Description?",
    name: "description",
  },

    {
    type: "input",
    message: "What was your motivation?",
    name: "motivation",
  },

  {
    type: "input",
    message: "Why did you build this project?",
    name: "build",
  },

  {
    type: "input",
    message: "What problem does it solve",
    name: "solve",
  },

  {
    type: "input",
    message: "What did you learn?",
    name: "learn",
  },

  {
    type: "input",
    message: "What makes your project stand out?",
    name: "standout",
  },

  {
    type: "list",
    message: "choose type of project license?",
    name: "license",
    choices: [
        "MIT",
        "Other",
        "GPLv2",
        "Apache",
        "GPLv3",
        "BSD 3-clause",
        "Unlicense",
        "BSD 2-clause",
        "LGPLv3",
        "AGPLv3",
      ],
  },

])

.then((data)=> {
    console.log(data)
    writeToFile('README.md', generateMarkdown(data))
    // const{
    //     title,
    //     description,
    //     motivation,
    //     build,
    //     solve,
    //     learn,
    //     standout,
    //     license,
    // } = data;
    // fs.writeToFile()
})







// const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
