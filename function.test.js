const twoMinimums = require("./function");

describe("twoMinimums function", () => {
  it("should return sum of two minimums", () => {
    expect(twoMinimums([1, 4, 5, 9])).toBe(5);
  });
  it("should return console.log(error text)", () => {
    expect(twoMinimums([1])).toBe(
      console.log("Массив должен cодержать минимум два числа")
    );
  });
  it("should return console.log(error text)", () => {
    expect(twoMinimums([1, "ошибка", 5, 9])).toBe(
      console.log("Массив должен cодержать численные значения")
    );
  });
});
