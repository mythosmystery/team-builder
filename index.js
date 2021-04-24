const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Team = require("./lib/team");
const Prompt = require("./lib/prompt");
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");

const writeFileAsync = util.promisify(fs.writeFile);
const prompt = new Prompt();
const employees = [];

function init() {
   getManager();
}

init();

function menu() {   
      prompt.menuPrompt().then((res) => {
         if (res.menu == "Engineer") getEngineer();
         if (res.menu == "Intern") getIntern();
         if (res.menu == "Finish") generateTeam();
      });
}
function getManager() {
   prompt.managerPrompt().then((res) => {
      employees.push(new Manager(res.name, res.id, res.email, res.officeNum));
      menu();
   });
}
function getIntern() {
   prompt.internPrompt().then((res) => {
      employees.push(new Intern(res.name, res.id, res.email, res.school));
      menu();
   });
}
function getEngineer() {
   prompt.engineerPrompt().then((res) => {
      employees.push(new Engineer(res.name, res.id, res.email, res.github));
      menu();
   });
}
function generateTeam() {
   console.log("generating Team...");
   const team = new Team();
   generateHTML(team);
}
function generateHTML(team) {
   const HTML = team.createBody(team.createCards(employees));
   writeFileAsync("index.html", HTML)
      .then(() => console.log("write ok"))
      .catch((err) => console.error(err));
}