const { sumOfNumbers } = require(".");

describe("Sum of number between 1 and N", () => {
  it('debería retornar 20100', () => {
    expect(sumOfNumbers()).toBe(20100);
  });

  it.skip('debería retornar 500500 para n = 1000', () => {
    expect(sumOfNumbers(1000)).toBe(500500);
  });
});
