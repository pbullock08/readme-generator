// Function that returns a license badge based on which license is passed in, if there is no license it returns an empty string
function renderLicenseBadge(license) { 
  switch (license) {
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;
    case 'Apache':
     return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      break;
    case 'GNU':
      return`[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
      break;
    default:
    return ``;
    break;
  }
}

// Function that returns the license section and link, if there is no license it returns an empty string
function renderLicense(license) { 
  switch (license) {
    case 'MIT':
      return `## License \n\nThis application is licensed under the [MIT license.](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt)`;
      break;
    case 'Apache':
     return `## License \n\nThis application is licensed under the [Apache license.](https://github.com/apache/.github/blob/main/LICENSE)`;
      break;
    case 'GNU':
      return `## License \n\nThis application is licensed under the [GNU license.](https://github.com/collective/example.p4p5/blob/master/LICENSE.GPL)`;
      break;
    default:
    return ``;
    break;
  }
}

// Function that renders Table of Contents depending on the condition of license or no license
function renderTOC(license) {
  switch (license) {
    case '':
      return `## Table of Contents \n * [Installation](#installation) \n * [Usage](#usage) \n * [Contributing](#contributing) \n * [Tests](#tests) \n * [Questions](#questions)`;
      break;
    default:
    return `## Table of Contents \n * [Installation](#installation) \n * [Usage](#usage) \n * [License](#license) \n * [Contributing](#contributing) \n * [Tests](#tests) \n * [Questions](#questions)`;
    break;
  }

}

// Function to generate markdown for README
function generateMarkdown({ title, license, description, installation, usage, contributing, tests, username, email}) {
  return `# ${title}
  ${renderLicenseBadge(license)}

  ## Description
  ${description}

  ${renderTOC(license)}

  ## Installation

  ${installation}

  ## Usage

  ${usage}

  ${renderLicense(license)}

  ## Contributing 

  ${contributing}

  ## Tests 

  ${tests}

  ## Questions

  For questions or issues regarding this application, you can contact me via [GitHub](https://github.com/${username}/) or via email at ${email}. </br> Please include the repository name as the subject of your correspondence.`;
}

// export generateMarkdown fuction to index.js
module.exports = generateMarkdown;