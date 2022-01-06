const fs = require('fs');
const inquirer = require('inquirer');
const { generateMarkdown } = require('./utils/generateMarkdown.js');

/**
 * Step 1: indicate which sections you would like to include in your readme
 */
const sections = [
  'Description', 'Video/screenshot', 'Installation', 'Usage', 'Credits', 'License', 'Contribute','Tests'
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
    name: 'name'
  },  
  {
    type: 'input',
    message: 'Enter your github user name',
    name: 'username'
  },
  {
    type: 'input',
    message: 'Enter the project name:',
    name: 'title'
  }
];
const optionalQuestions = [
  {
    type: 'input',
    message: 'Enter a description',
    name: 'description'
  },
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
    type: 'input',
    message: 'Link to video or screenshot',
    name: 'video/screenshot'
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
    type: 'list',
    choices: ['Apache','BSD','MIT','GNU GPL', 'Eclipse Public License'],
    message: 'Choose a license',
    name: 'license'
  },
  {
    type: 'input',
    message: 'Enter contact email',
    name: 'email'
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
    console.log('map ', filteredQuestions);
    inquirer
      .prompt([...filteredQuestions, ...requiredQuestions])
      .then((answers) => {
        console.log(answers)
        // fs.writeFile(`README_${d}.md`, JSON.stringify(response, null, 2), (err) => {
        //   console.log(err);
        // });
      });
  });
