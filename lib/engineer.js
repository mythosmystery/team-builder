const Employee = require("./employee");
class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
        this.githubLink = `https://github.com/${github}`;
        this.role = "Engineer";        
    }
    getGithub(){
        return this.github;
    }
    getGitLink(){
        return this.githubLink;
    }
}
module.exports = Engineer;