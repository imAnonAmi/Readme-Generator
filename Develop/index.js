const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const sendName = require("./utils/api.js");

const writeToFile = util.promisify(fs.writeFile);

function getUserName() {
    return inquirer.prompt([
      {
        type: "input",
        name: "username",
        message: "What is your GitHub username?",
        default: null,
      },
    ])

  }

//const questions = [
//
//];


async function init() {
  
  
  const username = await getUserName();


  const data = await (sendName, username);

  generateMarkdown(data);


  await writeToFile("README.md", md);

  console.log("Successfully created README.md!");
}

init();
