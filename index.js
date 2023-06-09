// Packages and files needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },

    {
        type: 'input',
        message: 'What is the description of your project?',
        name: 'description',
    },

    {
        type: 'input',
        message: 'What are the installation instructions for your project?',
        name: 'installation',
    },

    {
        type: 'input',
        message: 'How do you use your project?',
        name: 'usage',
    },

    {
        type: 'list',
        message: 'What license do you want to use for your project?',
        name: 'license',
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
                name: 'None',
                value: '',
            }
        ]
    },

    {
        type: 'input',
        message: 'What are the contribution guidelines for your project?',
        name: 'contributing',
    },

    {
        type: 'input',
        message: 'What are the test instructions for your project?',
        name: 'tests',
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
];

//Function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((data) => {
            //function to create readme file from user input 
            fs.writeFile('./sample/README.md', generateMarkdown(data), (err) =>
                err ? console.log(err) : console.log('README.md file successfully completed!')
            );
        });

};

// Function call to initialize app
init();
