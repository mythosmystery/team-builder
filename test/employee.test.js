const Employee = require("../lib/Employee");

test("Create Employee instance", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("Set name with constructor", () => {
  const name = "Steve";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Set ID with constructor", () => {
  const testValue = 123;
  const e = new Employee("Steve", testValue);
  expect(e.id).toBe(testValue);
});

test("Set email with constructor", () => {
  const testValue = "steve@test.net";
  const e = new Employee("Steve", 123, testValue);
  expect(e.email).toBe(testValue);
});

test("test getName", () => {
  const testValue = "Steve";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test("test getId()", () => {
  const testValue = 123;
  const e = new Employee("Steve", testValue);
  expect(e.getId()).toBe(testValue);
});

test("test getEmail()", () => {
  const testValue = "steve@test.net";
  const e = new Employee("Steve", 123, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("getRole() returns Employee", () => {
  const testValue = "Employee";
  const e = new Employee("Steve", 123, "steve@test.net");
  expect(e.getRole()).toBe(testValue);
});