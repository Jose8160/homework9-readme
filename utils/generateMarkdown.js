// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ![${data.license}](https://img.shields.io/badge/license-${data.license}-blue.svg)
  # Description
   ${data.description}
  # Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributed](#contributed)
  * [License](#license)
  * [Questions](#questions)
  # Installation  
  ${data.installation}
  # Usage  
  ${data.Usage}
  # Contributed
  Contributers: ${data.contributed} 
  # License
  This application is protected under conditions of the ${data.license} license.
  # Questions
  My Github Profile: http://www.github.com/${data.git}  
  If there are any questions contact 
  ${data.email}

`;
}

module.exports = generateMarkdown;
