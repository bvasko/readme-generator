/**
 * Add sections to table of contents
 */

function renderScreenshot(filename) {
  return `![${filename}](${filename})`
}

function renderLicenseBadge(license) {
  return `![license](https://img.shields.io/badge/license-${license}-blue)`
}

// TODO: import licenses, write to file, and add to repo (or find a better link)
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `[${license}](https://choosealicense.com/licenses/${license.toLowerCase()}/) `
}

function renderLicenseSection(license) {
  return `${renderLicenseLink(license)} ${renderLicenseBadge(license)}`;
}

function renderSections(sections, answers) {
  let content = '';
  sections.forEach(sectionName => {
    if (sectionName === null) return;
    console.log(sectionName)
    const sectionContent = answers[sectionName.toLowerCase()];
content += `
# ${sectionName}
${(sectionName === 'License' ? renderLicenseSection(sectionContent) : sectionContent) }
${(sectionName === 'screenshot' ? renderScreenshot(sectionContent) : sectionContent) }
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