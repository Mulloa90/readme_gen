// TODO: Include packages needed for this application
const fs = require('fs')
const path = require('path')
// const inquirer = require('inquirer')
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init(

    writeToFile('createdFile.md', "hello world")
);



