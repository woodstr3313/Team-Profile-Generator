// MODULES
const inquirer = require("inquirer");
const fs = require("fs");
const teamGenerator = require("./src/template")
// LIB MODULES
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// ARRAY FOR ANSWERS
const staffMemberData = [];

// ARRAY FOR RESPONSES IN CLI
const questions = async() => {
    const answers = await inquirer
    .prompt ([
        {
            type: "input",
            message: "What is your name?",
            name: "name",
        }, 
        {
            type: "input",
            message: "What is your ID?",
            name: "id",
        },
        {
        type: "input",
        message: "What is your email?",
        name: "email",
        },
        {
            type: "input",
            message: "What is your role?",
            name: "role",
            choices: ["Engineer", "Intern", "Manager"],
        }
    ])


// MANAGER QUESTIONS
    if (answers.role === "Manager") {
        const managerQuestions = await inquirer .prompt([
            {
                type: "input",
                message: "What is your office number?",
                name: "officeNumber",
            },
        ])
        const newManager = new Manager(
            answers.name,
            answers.id,
            answers.email,
            managerQuestions.officeNumber
        );
        staffMemberData.push(newManager);
    }

    // ENGINEER QUESTIONS
    else if (answers.role === "Engineer") {
        const getGithub = await inquirer .prompt([
            {
                type: "input",
                message: "What is your Github username?",
                name: "github",
            }
        ])
        const newEngineer = new Engineer (
            answers.name,
            answers.id,
            answers.email,
            getGithub.github
        );
        staffMemberData.push(newEngineer);
    }

//  INTERN QUESTIONS
 else if (answers.role === "Intern") {
     const internQuestions = await inquerer .prompt ([
         {
            type: "input",
            message: "What university did you go to?",
            name: "school",
         },
     ])
     const newIntern = new Intern (
         answers.name,
         answers.id,
         answers.email,
         internQuestions.school
     );
     staffMemberData.push(newIntern);
 }
};

async function promptQuestions() {
    await questions()
    const addAnswers = await inquirer .prompt([
        {
            type: "list",
            message: "What would you like to do next?",
            choices: ["Add a new member", "Create team"],
            name: "addMember",
        }
    ])
    if (addAnswers.addMember === "Add a new member"){
        return promptQuestions()
    }
    return generateTeam();
}
function generateTeam () {
    fs.writeFileSync(
        "./dist/index.html",
        teamGenerator(staffMemberData),
        "utf-8"
    );
}

promptQuestions()