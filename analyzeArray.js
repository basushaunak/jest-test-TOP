// An analyzeArray function that takes an array of numbers and returns an object with the following properties:
// average, min, max, and length.

function analyzeArray(inputArray) {
  if (!Array.isArray(inputArray)) {
    return {
      min: undefined,
      max: undefined,
      length: undefined,
      average: undefined,
    };
  }
  let min = Infinity;
  let max = -Infinity;
  let length = inputArray.length;
  let total = 0;
  let average = 0;
  for (let i = 0; i < length; i++) {
    if (typeof inputArray[i] !== "number") {
      min = undefined;
      max = undefined;
      total = undefined;
      average = undefined;
      break;
    }
    if (inputArray[i] < min) {
      min = inputArray[i];
    }
    if (inputArray[i] > max) {
      max = inputArray[i];
    }
    total += inputArray[i];
  }
  if (total !== undefined) {
    average = total / length;
  }
  return { min: min, max: max, length: length, average: average };
}

module.exports = analyzeArray;