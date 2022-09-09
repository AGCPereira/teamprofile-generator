const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

test("Create an office number", () => {
    const testOfficeNumber = 1;
    const employeeInstance = new Manager("Jane", 1, "janedoe@yahoo.com", testOfficeNumber);
    expect(employeeInstance.officeNumber).toBe(testOfficeNumber);
});

test("Testing officeNumber will return office number", () => {
    const testOfficeNumber = 1;
    const employeeInstance = new Manager("Jane", 1, "janedoe@yahoo.com", testOfficeNumber);
    expect(employeeInstance.getOfficeNumber()).toBe(testOfficeNumber);
});

test("Testing role", () => {
    const returnValue = "Manager";
    const employeeInstance = new Manager("Jane", 1, "janedoe@yahoo.com");
    expect(employeeInstance.getRole()).toBe(returnValue);
});