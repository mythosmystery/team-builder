class Team {   
   createCards(employees) {
      let cards = [];
      for (const employee of employees) {
         if (employee.getRole() == "Manager") {
            cards.push(`<div class="col s12 m4">
                    <div class="card blue lighten-2 z-depth-3">
                        <div class="card-content black-text">
                            <span class="card-title">${employee.getName()}</span>
                            <span class="card-title"><i class="material-icons">assignment</i> Manager</span>
                            <p><ul class="collection black-text z-depth-1">                
                            <li class="collection-item">ID #: ${employee.getId()}<i class="secondary-content material-icons">assignment_ind</i></li>
                            <li class="collection-item"><div>Email: ${employee.getEmail()}<a href="mailto:${employee.getEmail()}" class="secondary-content"><i class="material-icons">email</i></a></div></li>
                            <li class="collection-item">Office Number: ${employee.getOffice()}<i class="secondary-content material-icons">domain</i></li>
                            </ul></p>
                        </div>
                        <div class="card-action">
                            <a href="mailto:${employee.getEmail()}" class="red-text">Email</a>              
                        </div>
                    </div>
                </div>`);
         } else if (employee.getRole() == "Engineer") {
            cards.push(`<div class="col s12 m4">
             <div class="card blue lighten-2 z-depth-3">
                 <div class="card-content black-text">
                     <span class="card-title">${employee.getName()}</span>
                     <span class="card-title"><i class="material-icons">web</i> Engineer</span>
                     <p><ul class="collection black-text z-depth-1">                
                     <li class="collection-item">ID #: ${employee.getId()}<i class="secondary-content material-icons">assignment_ind</i></li>
                     <li class="collection-item"><div>Email: ${employee.getEmail()}<a href="mailto:${employee.getEmail()}" class="secondary-content"><i class="material-icons">email</i></a></div></li>
                     <li class="collection-item"><div>Github: ${employee.getGithub()}<a href="${employee.getGitLink()}" target="_blank" class="secondary-content"><i class="material-icons">public</i></a></div></li>
                     </ul></p>
                 </div>
                 <div class="card-action">
                     <a href="mailto:${employee.getEmail()}" class="red-text">Email</a>
                     <a href="${employee.getGitLink()}" class="red-text">Github</a>              
                 </div>
             </div>
         </div>`);
         } else {
            cards.push(`<div class="col s12 m4">
             <div class="card blue lighten-2 z-depth-3">
                 <div class="card-content black-text">
                     <span class="card-title">${employee.getName()}</span>
                     <span class="card-title"><i class="material-icons">school</i> Intern</span>
                     <p><ul class="collection black-text z-depth-1">                
                     <li class="collection-item">ID #: ${employee.getId()}<i class="secondary-content material-icons">assignment_ind</i></li>
                     <li class="collection-item"><div>Email: ${employee.getEmail()}<a href="mailto:${employee.getEmail()}" class="secondary-content"><i class="material-icons">email</i></a></div></li>
                     <li class="collection-item">School: ${employee.getSchool()}<i class="secondary-content material-icons">account_balance</i></li>
                     </ul></p>
                 </div>
                 <div class="card-action">
                     <a href="mailto:${employee.getEmail()}" class="red-text">Email</a>                             
                 </div>
             </div>
         </div>`);
         }
      }
      return String.prototype.concat(cards).replace(/,/g, '\n');
   }
   createBody(cards) {
      return `<!DOCTYPE html>
            <html>
            <head>
                <meta charset="utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <title>Team Builder</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
            </head>
            <body style="background-image: url('./images/bg.jpg');">
                <nav>
                    <div class="nav-wrapper z-depth-2">
                        <a href="#" class="brand-logo center">My Team</a>
                    </div>
                </nav>
                <div class="container">      
                    <div class="row">\n${cards}\n</div>
                </div>
            </body>
            </html>`;
   }
}
module.exports = Team;