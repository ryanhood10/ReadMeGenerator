// TODO: Include packages needed for this application
var inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs')


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
      },
      {
        type: "input",
        name: "githubUser",
        message: "What is your GitHub username?",

      },      {
        type: "input",
        name: "email",
        message: "What is your email address?"
      },
      {
        type: "input",
        name: "description",
        message: "Provide a short description explaining the what, why, and how of your project.\
- What was your motivation?\
- Why did you build this project? \
- What problem does it solve?\
- What did you learn??"
      },

     {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project?"
      },
      {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples of use. Feel free to add screenshots."
      },
      {
        type: "input",
        name: "credits",
        message: "List your collaborators, along with their github profile links"
      },
      {
        type: "list",
        name: "license",
        message: "Which license do you have?",
        choices: ["None", "Apache License 2.0", "GNU General Public License v3.0", "MIT License", `BSD 2-Clause "Simplified" License`, `BSD 3-Clause "New" or "Revised" License`, "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU Lesser General Public License v3.0", "Mozilla Public License 2.0", "The Unlicense"],


      },
    
];

// TODO: Create a function to write README file
 function writeToFile(tempelate) { 
  
   fs.writeFile("README.md",  tempelate,(error) => {
    if(error){
        throw error
    }
console.log("Your file was created successfully")
   })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt( questions
    /* Pass your questions in here */
  )
  .then((answers) => {
    console.log(answers)
    var readmeTempelate = generateMarkdown(answers)
    console.log(readmeTempelate)
    writeToFile(readmeTempelate)
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    console.log(error)

  });

}

// Function call to initialize app
init();
