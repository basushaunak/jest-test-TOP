// calculator Tests
const Calculator = require("./calulator");



test("add: 'a','b' should be undefined", () => {
  const calculator = new Calculator();
  expect(calculator.add("a", "b")).toBe(undefined);
});

test("add: 'a',1 should be undefined", () => {
  const calculator = new Calculator();
  expect(calculator.add("a", 1)).toBe(undefined);
});

test("add: 1,1 should be 2", () => {
  const calculator = new Calculator();
  expect(calculator.add(1, 1)).toBe(2);
});

test("add: 1.5,2 should be 3.5", () => {
  const calculator = new Calculator();
  expect(calculator.add(1.5, 2)).toBe(3.5);
});

test("add: 1.539,2.472 should be 4.011", () => {
  const calculator = new Calculator();
  expect(calculator.add(1.539,2.472)).toBeCloseTo(4.011);
});

//

test("subtract: 'a','b' should be undefined", () => {
  const calculator = new Calculator();
  expect(calculator.subtract("a", "b")).toBe(undefined);
});

test("subtract: 'a',1 should be undefined", () => {
  const calculator = new Calculator();
  expect(calculator.subtract("a", 1)).toBe(undefined);
});

test("subtract: 1,1 should be 0", () => {
  const calculator = new Calculator();
  expect(calculator.subtract(1, 1)).toBe(0);
});

test("subtract: 1.5,2 should be -0.5", () => {
  const calculator = new Calculator();
  expect(calculator.subtract(1.5, 2)).toBeCloseTo(-0.5);
});

test("subtract: 1.539,2.472 should be 4.011", () => {
  const calculator = new Calculator();
  expect(calculator.subtract(1.539,2.472)).toBeCloseTo(-0.933);
});

//

test("divide: 'a','b' should be undefined", () => {
  const calculator = new Calculator();
  expect(calculator.divide("a", "b")).toBe(undefined);
});

test("divide: 'a',1 should be undefined", () => {
  const calculator = new Calculator();
  expect(calculator.divide("a", 1)).toBe(undefined);
});

test("divide: 1,1 should be 0", () => {
  const calculator = new Calculator();
  expect(calculator.divide(1, 1)).toBe(1);
});

test("divide: 1.5,2 should be -0.5", () => {
  const calculator = new Calculator();
  expect(calculator.divide(1.5, 2)).toBeCloseTo(0.75);
});

test("divide: 1.539,2.472 should be 4.011", () => {
  const calculator = new Calculator();
  expect(calculator.divide(1.539,2.472)).toBeCloseTo(0.622572815534);
});

//

test("multiply: 'a','b' should be undefined", () => {
  const calculator = new Calculator();
  expect(calculator.multiply("a", "b")).toBe(undefined);
});

test("multiply: 'a',1 should be undefined", () => {
  const calculator = new Calculator();
  expect(calculator.multiply("a", 1)).toBe(undefined);
});

test("multiply: 1,1 should be 0", () => {
  const calculator = new Calculator();
  expect(calculator.multiply(1, 1)).toBe(1);
});

test("multiply: 1.5,2 should be -0.5", () => {
  const calculator = new Calculator();
  expect(calculator.multiply(1.5, 2)).toBe(3);
});

test("multiply: 1.539,2.472 should be 4.011", () => {
  const calculator = new Calculator();
  expect(calculator.multiply(1.539,2.472)).toBeCloseTo(3.804408);
});
