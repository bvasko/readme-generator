/**
 * Add sections to table of contents
 */

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![license](https://img.shields.io/badge/license-${license}-blue)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `[${license}](https://choosealicense.com/licenses/${license}/) `
}

function renderLicenseSection(license) {
  return `${renderLicenseLink(license)} ${renderLicenseBadge(license)}`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderSections(sections, answers) {
  let content = '';
  sections.forEach(name => {
    if (name === null) return;
    const sectionContent = answers[name.toLowerCase()];
content += `
# ${name}
${(name === 'License' ? renderLicenseSection(sectionContent) : sectionContent) }
`
  });
  return content;
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  /**
   * Generate a section for each answer
   */
  const {sections, answers} = data;
  let toc = '## Table of Contents';
  if (sections.length > 3) {
    sections.map(section => {
    toc += `
  - [${section}](#${section.toLowerCase()})`});
  } else {
    toc = '';
  }
  
  return `
  # ${answers.title}

### ${answers.description || ''}

${toc}
    
${renderSections(sections, answers)}

## Questions?
View my github profile: [${answers.username}](https://github.com/${answers.username})
or email me at [${answers.email}](${answers.email})
    `
}

module.exports = generateMarkdown;
/**
 * ## Description
${data.description || ''}
${renderToC()}
## Installation
${data.install || ''}
## Usage
Provide instructions and examples for use. Include screenshots as needed.
To add a screenshot, create an "assets/images" folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
    \`\`\`md
    ![alt text](assets/images/screenshot.png)
    \`\`\`
## Credits
(tutorials, 3rd party packages, collaborators)

## License
${data.license}
[https://choosealicense.com/](https://choosealicense.com/).
---
🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
## Badges
![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
## Features
If your project has a lot of features, list them here.
## How to Contribute
If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
## Tests
Go the extra mile and write tests for 
`;*/