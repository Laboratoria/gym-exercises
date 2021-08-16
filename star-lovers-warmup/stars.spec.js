const { printStar } = require("./stars");

describe("Star Lovers", () => {
  it('debería retornar "***" para 3', () => {
    expect(printStar(3)).toBe("***");
  });

  it('debería retornar "*****" para 5', () => {
    expect(printStar(5)).toBe("*****");
  });

  it('debería retornar "" para 0', () => {
    expect(printStar(0)).toBe("");
  });
});
