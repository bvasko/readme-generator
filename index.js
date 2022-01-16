#!/usr/bin/env node

const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const {sections, optionalQuestions} = require('./optionalQuestions');


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
    message: 'Enter contact email for questions section',
    name: 'email'
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
        const data = {
          sections: sectionResponse.sections,
          answers: answers
        }
        const md = generateMarkdown(data);
        //get file path from answers
        const dir = `${process.cwd()}/README.md`;
        fs.writeFile(dir, md, (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log(`Success! Your file is at: ${dir}`);
          }
        });
      });
  });
