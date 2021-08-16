const { printStarArr } = require("./stars");

describe("Star Lovers::printArrayStar", () => {
  it('debería retornar ["*", "**", "***"] para 3', () => {
    expect(printArrayStar(3)).toStrictEqual(["*", "**", "***"]);
  });

  it('debería retornar ["*"] para 1', () => {
    expect(printArrayStar(1)).toStrictEqual(["*"]);
  });

  it("debería retornar [] para 0", () => {
    expect(printArrayStar(0)).toStrictEqual([]);
  });
});

