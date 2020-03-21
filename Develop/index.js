const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeToFile = util.promisify(fs.writeFile);

function getUserName() {
    return inquirer.prompt([
      {
        type: "input",
        name: "gitname",
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

function init() {

}

init();
