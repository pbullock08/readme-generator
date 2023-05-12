// TODO: Include packages needed for this application

const inquirer = require('inquirer');

console.log(inquirer);
// TODO: Create an array of questions for user input

inquirer
.prompt([
    { type: 'input',
    message: 'What is the title of your project?',
    name: 'Title',
    },

    {
        type: 'input',
        message: 'What is the description of your project?',
        name: 'Description',
    },

    {
        type: 'input',
        message: 'What are the installation instructions for your project?',
        name: 'Installation',
    },

    {
        type: 'input',
        message: 'How do you use your project?',
        name: 'Usage',
    },

    {
        type: 'list',
        message: 'What license do you want to use for your project?',
        name: 'License',
        choices: [
            {
                name: 'MIT License',
                value: 'MIT',
            },

            {
                name: 'Apache License 2.0',
                value: 'Apache',
            },

            {
                name: 'GNU General Public License v3.0',
                value: 'GNU',
            },

            {
                name: 'BSD 2-Clause "Simplified" License',
                value: 'BSD',
            },

            {
                name: 'Mozilla Public License 2.0',
                value: 'Mozilla',
            },
        ]   
    },

    {
        type: 'input',
        message: 'What are the contribution guidelines for your project?',
        name: 'Contributing',
    },

    {
        type: 'input',
        message: 'What are the test instructions for your project?',
        name: 'Tests',
    },

    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
    },

    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
])

.then((data) => {
    console.log(data)
});




// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
