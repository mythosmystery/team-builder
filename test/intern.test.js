const Intern = require("../lib/Intern");

test("setting school", () => {
  const testValue = "GA Tech";
  const e = new Intern("Steve", 123, "steve@test.net", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() returns intern", () => {
  const testValue = "Intern";
  const e = new Intern("Steve", 123, "steve@test.net", "GA Tech");
  expect(e.getRole()).toBe(testValue);
});

test("test getSchool()", () => {
  const testValue = "GA Tech";
  const e = new Intern("Steve", 123, "steve@test.net", testValue);
  expect(e.getSchool()).toBe(testValue);
});