/* eslint-disable no-undef */
const add = (a, b) => a + b;

describe("add tests", () => {
  it("should add two numbers", () => {
    const result = add(3, 4);
    expect(result).toBe(7);
  });
});
