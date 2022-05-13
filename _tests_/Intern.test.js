const Intern = require ("../lib/Intern");

test("Can get School Test", () => {
    const getSchoolTest = "Georgia Tech";
    const newEmployee = new Intern("Travis", 3, "testemail@gmail.com", "Georgia Tech");;
    expect(newEmployee.school).toBe(getSchoolTest);
});

test("Get Role Test() should return \"Intern\"", () => {
    const testIntern = "Intern";
    const newEmployee = new Intern ("Travis", 3, "testemail@gmail.com", "Georgia Tech");
    expect (newEmployee.getRole()).toBe(testIntern);
});

test("School Test", () => {
    const schoolTest = "Georgia Tech";
    const newEmployee = new Intern ("Travis", 3, "testemail@gmail.com", "Georgia Tech");
    expect(newEmployee.getSchool()).toBe(schoolTest);
});