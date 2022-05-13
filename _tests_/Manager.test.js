const Manager = require ("../lib/Manager");
const Employee = require ("../lib/Employee");

test("Can get Office Number Test", () => {
    const getOfficeNumber = 3;
    const newEmployee = new Manager(getOfficeNumber);
    expect(newEmployee.officeNumber).toBe(getOfficeNumber);
});

test("Get Role Test() should return \"Manager\"", () => {
    const testManager = "Manager";
    const newEmployee = new Manager ("Travis", 7, "testemail@gmail.com", 3);
    expect (newEmployee.getRole()).toBe(testManager);
});

test("Office Number Test", () => {
    const officeNumberTest = 3;
    const newEmployee = new Manager(officeNumberTest);
    expect(newEmployee.getOfficeNumber).toBe(officeNumberTest);
});