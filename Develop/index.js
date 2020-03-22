const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const api = require("./utils/api.js");

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

function writeToFile("README.md", md) {
}

async function init() {
  getUserName();
  
  const username = await getUserName();

  api(username);

  const data = await api();

  generateMarkdown(data);


  await writeToFile("README.md", md);

  console.log("Successfully created README.md!");
}

init();
