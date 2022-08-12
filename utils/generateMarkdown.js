// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "IBM":
      return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
    case "ISC":
      return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "Mozilla":
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    case "None": 
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseTitle(license) {
  if (license!=="None"){
    return "## License"
  } else return ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseTOC(license) {
  if (license !== "None") {
    return "- [License](#license)";
  } else return ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(inquirerResponses) {
  return `
  # ${inquirerResponses.title}

## Description
${inquirerResponses.Description}

## TOC
 - [Installation](#installation)
 - [Usage](#usage)
 ${renderLicenseTOC(inquirerResponses.License)}
 - [Contributing](#contributing)
 - [Tests](#tests)
 - [Questions](#questions)

## Installation
${inquirerResponses.Installation}
## Usage
${inquirerResponses.Usage}
${renderLicenseTitle(inquirerResponses.License)}
${renderLicenseBadge(inquirerResponses.License)}
## Contributing
${inquirerResponses.Contributing}
## Tests
${inquirerResponses.Tests}
## Questions
If you have questions about this project please reach me at ${
    inquirerResponses["Email Address"]
  } or view my [Github](https://github.com/${
    inquirerResponses["Github username"]
  })

  
`;
}

module.exports = generateMarkdown;
