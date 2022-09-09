const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const managerCard = require('./src/card-manager');
const engineerCard = require('./src/card-engineer');
const internCard = require('./src/card-intern');
const wrapCards = require('./src/card-wrapper');

const team = [];

const addManager = [
    {
        type: 'confirm',
        message: 'Team Profile Generator',
        name: 'role'
    },
    {
        type: 'input',
        message: 'Name of manager',
        name: 'name'
    },
    {
        type: 'input',
        message: 'Manager ID',
        name: 'ID'
    },
    {
        type: 'input',
        message: 'Employee email',
        name: 'email'
    },
    {
        type: 'input',
        message: 'Employee office number',
        name: 'number'
    },
    {
        type: 'list',
        message: 'Next empoyee',
        name: 'Next',
        choices: ['Add Engineer', 'Add Intern', 'Team is complete']
    },
];

const addEngineer = [
   {
        type: 'input',
        message: 'Name of engineer',
        name: 'name'
    },
    {
        type: 'input',
        message: 'ID of engineer',
        name: 'ID'
    },
    {
        type: 'input',
        message: 'Email address of engineer',
        name: 'email'
    },
    {
        type: 'input',
        message: 'gitHub username of engineer',
        name: 'gitHub'
    },
    {
        type: 'list',
        message: 'Next empoyee',
        name: 'Next',
        choices: ['Add Engineer', 'Add Intern', 'Team is complete']
    },
];

const addIntern = [
    {
        type: 'input',
        message: 'Name of intern',
        name: 'name'
    },
    {
        type: 'input',
        message: 'ID of intern',
        name: 'ID'
    },
    {
        type: 'input',
        message: 'Email address of engineer',
        name: 'email'
    },
    {
        type: 'input',
        message: 'School where intern attended',
        name: 'school'
    },
    {
        type: 'list',
        message: 'Next empoyee',
        name: 'Next',
        choices: ['Add Engineer', 'Add Intern', 'Team is complete']
    },
]; 

ask(addManager);
function ask(questionArr) {
    inquirer.prompt(questionArr)
    .then((member) => {
        team.push(member);
        if (member.Next === 'add engineer') {
            ask(addEngineer);
        } else if (member.Next === 'add intern') {
            ask(addIntern);
        } else {
            createProfiles(team);
        }
    })
    catch.((err) => console.log(err));
}
function createProfiles(team) {
    
    const profiles = team.map((member) => {
      const { name, ID, email } = member;
      if (member.hasOwnProperty('number')) {
        const {number} = member;
        return new Manager(name, ID, email, number);
      }
      if (member.hasOwnProperty('github')) {
        const {gitHub} = member;
        return new Engineer(name, ID, email, gitHub);
      }
      if (member.hasOwnProperty('school')) {
        const {school} = member;
        return new Intern(name, ID, email, school);
      }
    });
    generateHtml(profiles);
  }

function generateHtml(profiles) {
    var profileCards = '';
    profiles.forEach((profile) => {
      if (profile instanceof Manager) {
        const card = managerCard(profile);
        profileCards += card;
      } else if (profile instanceof Engineer) {
        const card = engineerCard(profile);
        profileCards += card;
      } else if (profile instanceof Intern) {
        const card = internCard(profile);
        profileCards += card;
      }
})

const html = wrapCards(profileCards);

writeHTML(html);
};

function writeHtml(html) {
    fs.writeFile('./dist/team-profile.html', html, (err) => {
      if (err) throw err;
      console.log('HTML document created in /dist folder');
    });
  };