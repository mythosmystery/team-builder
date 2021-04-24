const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Team = require("./lib/team")
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");

const writeFileAsync = util.promisify(fs.writeFile);

const employees = [];

function init() {
   getManager();
}

init();

function menu() {
   inquirer
      .prompt([
         {
            type: "number",
            message: `\n 1.) Add engineer \n 2.) Add intern \n 3.) Finish`,
            name: "menu",
         },
      ])
      .then((res) => {
         if (res.menu == 1) getEngineer();
         if (res.menu == 2) getIntern();
         if (res.menu == 3) generateTeam();
      });
}
function getManager() {
   managerPrompt().then((res) => {
      employees.push(new Manager(res.name, res.id, res.email, res.officeNum));
      menu();
   });
}
function getIntern() {
   internPrompt().then((res) => {
      employees.push(new Intern(res.name, res.id, res.email, res.school));
      menu();
   });
}
function getEngineer() {
   engineerPrompt().then((res) => {
      employees.push(new Engineer(res.name, res.id, res.email, res.github));
      menu();
   });
}
function generateTeam() {
   console.log("generating Team...");
   const team = new Team();
   generateHTML(team);             
}
function generateHTML(team){    
    const HTML = team.createBody(team.createCards(employees));
    //console.log(HTML);
    writeFileAsync("index.html", HTML)
    .then(() => console.log("write ok"))
    .catch((err) => console.error(err)); 
}
function printEmployees() {
   for (const employee of employees) {
      console.log(employee);
   }
}
function internPrompt() {
   return inquirer.prompt([
      {
         type: "input",
         message: "What is this intern's name?",
         name: "name",
      },
      {
         type: "number",
         message: "What is this intern's employee ID?",
         name: "id",
      },
      {
         type: "input",
         message: "What is their email?",
         name: "email",
      },
      {
         type: "input",
         message: "What school did they attend?",
         name: "school",
      },
   ]);
}
function engineerPrompt() {
   return inquirer.prompt([
      {
         type: "input",
         message: "What is this engineer's name?",
         name: "name",
      },
      {
         type: "number",
         message: "What is this engineer's employee ID?",
         name: "id",
      },
      {
         type: "input",
         message: "What is their email?",
         name: "email",
      },
      {
         type: "input",
         message: "What is their github username?",
         name: "github",
      },
   ]);
}
function managerPrompt() {
   return inquirer.prompt([
      {
         type: "input",
         message: "What is the team manager's name?",
         name: "name",
      },
      {
         type: "number",
         message: "What is this team manager's employee ID?",
         name: "id",
      },
      {
         type: "input",
         message: "What is their email?",
         name: "email",
      },
      {
         type: "number",
         message: "What is their office number?",
         name: "officeNum",
      },
   ]);
}
