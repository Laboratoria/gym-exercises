const { sumOfNumbers } = require(".");

describe("Sum of number between 1 and N", () => {
  it('debería retornar 20100 por defecto o n = 200', () => {
    expect(sumOfNumbers()).toBe(20100);
  });

  it.skip('debería retornar 55 para n = 10', () => {
    expect(sumOfNumbers(10)).toBe(55);
  });

  it.skip('debería retornar 21 para n = 6', () => {
    expect(sumOfNumbers(6)).toBe(21);
  });

  it.skip('debería retornar 28 para n = 7', () => {
    expect(sumOfNumbers(7)).toBe(28);
  });

  it.skip('debería retornar 144453 para n = 537', () => {
    expect(sumOfNumbers(537)).toBe(144453);
  });

  it.skip('debería retornar 500500 para n = 1000', () => {
    expect(sumOfNumbers(1000)).toBe(500500);
  });
});
