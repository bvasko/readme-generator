/**
 * Step 1: indicate which sections you would like to include in your readme
 */
const sections = [
  'Installation', 
  'Usage', 
  'Screenshot', 
  'Credits', 
  'License', 
  'Contribute',
  'Tests'
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
    type: 'input',
    message: 'Add screenshot here',
    name: 'screenshot'
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

module.exports = { optionalQuestions, sections };