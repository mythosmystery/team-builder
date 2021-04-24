const Engineer = require("../lib/Engineer");

test("set Github username", () => {
  const testValue = "testUser";
  const e = new Engineer("Steve", 123, "steve@test.net", testValue);
  expect(e.github).toBe(testValue);
});

test("getRole() retuns Engineer", () => {
  const testValue = "Engineer";
  const e = new Engineer("Steve", 123, "steve@test.net", "testUser");
  expect(e.getRole()).toBe(testValue);
});

test("test getGithub()", () => {
  const testValue = "testUser";
  const e = new Engineer("Steve", 123, "steve@test.net", testValue);
  expect(e.getGithub()).toBe(testValue);
});