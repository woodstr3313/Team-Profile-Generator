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
