// TODO: Include packages needed for this application
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// const inquirer = require('inquirer')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Please enter project description'
    },
];

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  console.log("Hello, welcome to my readme generator!");
  inquirer.prompt(questions).then(function (inquirerResponses) {
    console.log(inquirerResponses)

    console.log('Generating file...')
    writeToFile("createdFile.md", generateMarkdown(inquirerResponses));
  });
}

// Function call to initialize app
init();
