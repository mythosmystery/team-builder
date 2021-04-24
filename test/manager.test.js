const Manager = require("../lib/Manager");

test("setting office number", () => {
  const testValue = 213;
  const e = new Manager("Steve", 123, "steve@test.net", testValue);
  expect(e.officeNum).toBe(testValue);
});

test("getRole() returns manager", () => {
  const testValue = "Manager";
  const e = new Manager("Steve", 123, "steve@test.net", 213);
  expect(e.getRole()).toBe(testValue);
});

test("test getOffice()", () => {
  const testValue = 213;
  const e = new Manager("Steve", 123, "steve@test.net", testValue);
  expect(e.getOffice()).toBe(testValue);
});