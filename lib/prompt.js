const inquirer = require("inquirer");
class Prompt {
   internPrompt() {
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
   engineerPrompt() {
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
   managerPrompt() {
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
}
module.exports = Prompt;