const Employee = require("../lib/Employee");

test("Employee Test", () => {
    const newEmployee = new Employee();
    expect(typeof(newEmployee)).toBe("object");
});

test("Employee Name Test", () => {
    const employeeName = "Travis";
    const newEmployee = new Employee(employeeName);
    expect(newEmployee.name).toBe(employeeName);
});

test("Employee ID Test", () => {
    const value = 100;
    const newEmployee = new Employee("ID", value);
    expect(newEmployee.id).toBe(value);
});

test("Employee Email Test", () => {
    const testEmail = "woodstr@frontiernet.net";
    const newEmployee = new Employee("Travis", 3, testEmail);
    expect(newEmployee.email).toBe(testEmail);
});

test("Get Name Test", () => {
    const testName = "Travis";
    const newEmployee = new Employee (testName);
    expect (newEmployee.getName()).tobe(testName);
});

test("Get ID Test", () => {
    const testId = 3;
    const newEmployee = new Employee ("ID", testId);
    expect (newEmployee.getId()).tobe(testId);
});

test("Get Email Test", () => {
    const testEmail = "woodstr@frontiernet.net";
    const newEmployee = new Employee ("Travis", 3, testEmail);
    expect (newEmployee.getEmail()).tobe(testEmail);
});

test("Get Role Test() should return \"Employee\"", () => {
    const testEmployee = "Employee";
    const newEmployee = new Employee ("Travis", 3, "testemail@gmail.com");
    expect (newEmployee.getRole()).tobe(testEmployee);
});






