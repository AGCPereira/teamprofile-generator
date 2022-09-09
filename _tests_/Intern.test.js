const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

test("Create school", () => {
    const testSchool = "School Name";
    const employeeInstance = new Intern("Jane", 2, "janedoe@yahoo.com", testSchool);
    expect(employeeInstance.school).toBe(testSchool);
});

test("Testing officeNumber will return office number", () => {
    const testSchool = "School Name";
    const employeeInstance = new Intern("Jane", 2, "janedoe@yahoo.com", testSchool);
    expect(employeeInstance.getSchool()).toBe(testSchool);
});

test("Testing role", () => {
    const returnValue = "Intern";
    const employeeInstance = new Intern("Jane", 2, "janedoe@yahoo.com", "School Name");
    expect(employeeInstance.getRole()).toBe(returnValue);
});