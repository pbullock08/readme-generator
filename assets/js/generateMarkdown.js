// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //${data.license} === 
  switch (condition) {
    case 'MIT':
      let badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;
    case 'Apache':
      badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      break;
    case 'GNU':
      badge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}


// Function to generate markdown for README
function generateMarkdown(data) {
  return 
  `# ${data.title}
  ${badge}

  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ##Installation

  ${data.installation}
  
  ##Usage

  ${data.usage}

  ##License

  This application uses [${data.license}]

  ##Contributing

  ${data.contributing}

  ##Tests

  ${data.tests}

  ##Questions
  
  For questions you can contact me at [GitHub](https://github.com/${data.username}) or via email at ${data.email}`;
}

module.exports = generateMarkdown;
