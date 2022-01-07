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

  return `[${license}](https://choosealicense.com/licenses/${license.toLowerCase()}/) `
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