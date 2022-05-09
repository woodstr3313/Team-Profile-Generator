const Engineer = require("../lib/Engineer");

// CREATE THE TEAM 
const generateTeam = (team) => {
// CREATE MANAGER HTML
const generateManager = (manager) => {
    return `
        <div class="card employee-card">
        <div class="card-header">
            <h2 class"card-title">${manager.getName()}</h2>
            <h3 class"card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
        </div> 
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">Get Role():</li>
                <li class="list-group-item">Office Number</li>
            </ul>
        </div>
        </div>   `;
    }; 
}
// CREATE ENGINEER HTML
const generateEngineer = (engineer) => {
    return `
    <div class="card employee-card">
    <div class="card-header">
        <h2 class"card-title">${engineer.getName()}</h2>
        <h3 class"card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
    </div> 
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">Get ID():</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}"</li>
            <li class="list-group-item>GitHub: <a href="https://github.com/${engineer.github()}" target="_blank" rel="noopener noreferrer">${engineer.github()}</a></li>
        </ul>
    </div>
    </div>   `;
}
