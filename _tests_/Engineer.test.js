const Engineer = require ("../lib/Engineer");

test("Can get Github Test", () => {
    const getGitHubTest = "woodstr3313";
    const newEmployee = new Engineer("Travis", 3, "testemail@gmail.com", "woodstr3313");
    expect(newEmployee.github).toBe(getGitHubTest);
});

test("Get Role Test() should return \"Engineer\"", () => {
    const testEngineer = "Engineer";
    const newEmployee = new Engineer ("Travis", 3, "testemail@gmail.com", "woodstr3313");
    expect(newEmployee.getRole()).toBe(testEngineer);
});

test("Github Test", () => {
    const gitHubTest = ("woodstr3313");
    const newEmployee = new Engineer("Travis", 3, "testemail@gmail.com", "woodstr3313");
    expect(newEmployee.github).toBe(gitHubTest);
});