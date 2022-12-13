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

      },
      {
        type: "input",
        name: "email",
        message: "What is your email address?"
      }
];

// TODO: Create a function to write README file
 function writeToFile(tempelate) {
   fs.writeFile("ReadME.md",  tempelate,(error) => {
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
    const readmeTempelate = generateMarkdown(answers)
    console.log(readmeTempelate)
    writeToFile(readmeTempelate)
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    console.log(error)
/*    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }*/  
  });

}

// Function call to initialize app
init();
