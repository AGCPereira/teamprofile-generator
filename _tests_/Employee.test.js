const Employee = require("../lib/Employee");

test("Can create an new employee", () => {
    const employeeInstance = new Employee();
    expect(typeof(employeeInstance)).toBe("object");
})

test("Testing name", () => {
    const name = "Jane";
    const employeeInstance = new Employee(name);
    expect(employeeInstance.name).toBe(name);
})

test("Testing ID", () => {
    const id = 1;
    const employeeInstance = new Employee("Jane", id);
    expect(employeeInstance.id).toBe(id);
})

test("Testing email", () => {
    const email = "janedoe@yahoo.com";
    const employeeInstance = new Employee("Jane", 1, email);
    expect(employeeInstance.email).toBe(email);
})



test("Gets name through getName method", () => {
    const testName = "Jane";
    const employeeInstance = new Employee(testName);
    expect(employeeInstance.getName()).toBe(testName);
})

test("Test ID through getID method", () => {
    const testID = 1;
    const employeeInstance = new Employee("Jane", testID);
    expect(employeeInstance.getID()).toBe(testID);
})

test("Test email through getEmail method", () => {
    const testEmail = "janedoe@yahoo.com";
    const employeeInstance = new Employee("Jane", 1, testEmail);
    expect(employeeInstance.getEmail()).toBe(testEmail);
})

test("Testing role", () => {
    const returnValue = "Employee";
    const employeeInstance = new Employee("Jane", 1, "janedoe@yahoo.com");
    expect(employeeInstance.getRole()).toBe(returnValue);
})