const fs = require('fs');
const inquirer = require('inquirer');

const questions = [
  {
    type: 'input',
    message: 'Enter your github user name',
    name: 'username'
  },
  {
    type: 'input',
    message: 'Enter the project name:',
    name: 'projectName'
  },
  {
    type: 'input',
    message: 'Enter a description',
    name: 'description'
  },
  {
    type: 'input',
    message: 'Enter installation instructions',
    name: 'install'
  },
  {
    type: 'input',
    message: 'Enter usage information',
    name: 'usage'
  },
  {
    type: 'input',
    message: 'Enter contribution information',
    name: 'contribute'
  },
  {
    type: 'input',
    message: 'Test instructions',
    name: 'test'
  },
  {
    type: 'list',
    choices: ['Apache','BSD','MIT','GNU GPL', 'Eclipse Public License'],
    message: 'Choose a license',
    name: 'license'
  },
  type: 'input',
  message: 'Enter contact email',
  name: 'email'
];

inquirer
  .prompt(questions)
  .then((response) =>
    console.log(response);
  );
