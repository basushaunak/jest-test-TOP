// A calculator object that contains functions for the basic operations: add, subtract, divide, and multiply. Each of these functions should take two numbers and return the correct calculation.

class Calculator {
  add(a, b) {
    if (!this.#validinput(a, b)) {
      return undefined;
    }
    return a + b;
  }
  subtract(a, b) {
    if (!this.#validinput(a, b)) {
      return undefined;
    }
    return a - b;
  }
  divide(a, b) {
    if (!this.#validinput(a, b)) {
      return undefined;
    }
    return a / b;
  }
  multiply(a, b) {
    if (!this.#validinput(a, b)) {
      return undefined;
    }
    return a * b;
  }
  #validinput(a, b) {
    return typeof a === "number" && typeof b === "number";
  }
}

module.exports = Calculator;
