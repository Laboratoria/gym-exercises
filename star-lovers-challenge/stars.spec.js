const { printStarsArray } = require("./stars");

describe("Star Lovers::printStarsArray", () => {
  it('debería retornar ["*", "**", "***"] para 3', () => {
    expect(printStarsArray(3)).toStrictEqual(["*", "**", "***"]);
  });

  it('debería retornar ["*"] para 1', () => {
    expect(printStarsArray(1)).toStrictEqual(["*"]);
  });

  it("debería retornar [] para 0", () => {
    expect(printStarsArray(0)).toStrictEqual([]);
  });
});

