const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

/**
 * Step 1: indicate which sections you would like to include in your readme
 */
const sections = [
  'Installation', 'Usage', 'Credits', 'License', 'Contribute','Tests'
];

checkboxOptions = sections.map(section => { return {name: `${section}`}});

const checkboxes =  {
      type: 'checkbox',
      message: 'Select sections of your readme',
      name: 'sections',
      choices: checkboxOptions
};
const requiredQuestions = [
  {
    type: 'input',
    message: 'Enter project name',
    name: 'title'
  },
  {
    type: 'input',
    message: 'Enter a description',
    name: 'description'
  },
  {
    type: 'input',
    message: 'Enter your github user name',
    name: 'username'
  },
  {
    type: 'input',
    message: 'Enter contact email for questions section',
    name: 'email'
  },
];
const optionalQuestions = [
  {
    type: 'input',
    message: 'Enter installation instructions',
    name: 'installation'
  },
  {
    type: 'input',
    message: 'Enter usage information',
    name: 'usage'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license',
    choices: ['Apache','BSD','MIT','GPL-3.0', 'Eclipse']
  },
  {
    type: 'input',
    message: 'Enter contribution information',
    name: 'contribute'
  },
  {
    type: 'input',
    message: 'Test instructions',
    name: 'tests'
  },
  {
    type: 'input',
    message: 'Enter credits',
    name: 'credits'
  }
];

inquirer
  .prompt(checkboxes)
  .then((sectionResponse) => {
    /**
     * Create question list based on sections checked
     */
    const filteredQuestions = sectionResponse.sections.map((resp, i) => {
      return optionalQuestions.find(obj => obj.name === resp.toLowerCase());
    });
    inquirer
      .prompt([...requiredQuestions, ...filteredQuestions])
      .then((answers) => {
        console.log(sectionResponse.sections, answers);
        const data = {
          sections: sectionResponse.sections,
          answers: answers
        }
        const md = generateMarkdown(data);
        fs.writeFile(`README_1.md`, md, (err) => {
          console.log(err);
        });
      });
  });
