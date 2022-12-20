// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if ( license === "Apache License 2.0"){ 
        return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"


    } else if (license === "GNU General Public License v3.0"){ 
        return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"

    } else if (license === "MIT License"){ 
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    } 
     else { return "" }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === "None"){
        return ""
    } else {
       return "- [license](#license)"
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === "None"){
        return ""
    } else {
        return `## License
        -${data.license}`
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ${data.githubUser}
  ${data.email} 

  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
   ${renderLicenseLink(data.license)}

  ## Installation
      -what are the steps required to install your project?
      -${data.installation}

  ## Usage
      -instructions & examples for use
      -add screenshot, create an asset/images folder in your repo (check phone)
      -${data.usage}


  ## Credits
       -list of collaborators with links to their github profiles
       -${data.credits}

    ${renderLicenseSection(data.license)}


  ## Features
        - lists the features of the product

  ## Contributing
      - If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so.
     The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

  ## Tests
      -write tests for your application. Then provide examples on how to run them here.

  ## Questions
      -    ${data.githubUser} -> find me on GitHub
      -    ${data.email} -> my contact email
---  

`;


}

module.exports = generateMarkdown;
