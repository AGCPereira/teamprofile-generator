const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

test("Create a github", () => {
    const testGithub = "JaneDoe";
    const employeeInstance = new Engineer("Jane", 1, "janedoe@yahoo.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github", () => {
    const testGithub = "JaneDoe";
    const employeeInstance = new Engineer("Jane", 1, "janedoe@yahoo.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Jane", 1, "janedoe@yahoo.com", "JaneDoe");
    expect(employeeInstance.getRole()).toBe(returnValue);
});