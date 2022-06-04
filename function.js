function twoMinimums(array) {
  if (array.length < 2) {
    return console.log("Массив должен cодержать минимум два числа");
  } else if (array.some(isNaN)) {
    return console.log("Массив должен cодержать численные значения");
  } else {
    const result = array.sort((a, b) => a - b).slice(0, 2);
    return result[0] + result[1];
  }
}

module.exports = twoMinimums;
