// capitalize tests
const {capitalize,titleCase} = require("./capitalize");


test("undefined should return undefined", () => {
  expect(capitalize(undefined)).toBe(undefined);
});

test("false should return false", () => {
  expect(capitalize(false)).toBe(false);
});

test("100 should return 100", () => {
  expect(capitalize(100)).toBe(100);
});

test("3.333 should return 3.333", () => {
  expect(capitalize(3.333)).toBe(3.333);
});

test("'.' should return '.'", () => {
  expect(capitalize(".")).toBe(".");
});

test("'a' should return 'A'", () => {
  expect(capitalize("a")).toBe("A");
});

test("abra should return Abra", () => {
  expect(capitalize("abra")).toBe("Abra");
});

test("abra ka dabra should return Abra ka dabra", () => {
  expect(capitalize("abra ka dabra")).toBe("Abra ka dabra");
});

test("undefined should return undefined", () => {
  expect(titleCase(undefined)).toBe(undefined);
});

test("false should return false", () => {
  expect(titleCase(false)).toBe(false);
});

test("100 should return 100", () => {
  expect(titleCase(100)).toBe(100);
});

test("3.333 should return 3.333", () => {
  expect(titleCase(3.333)).toBe(3.333);
});

test("'.' should return '.'", () => {
  expect(titleCase(".")).toBe(".");
});

test("'a' should return 'A'", () => {
  expect(titleCase("a")).toBe("A");
});

test("abra should return Abra", () => {
  expect(titleCase("abra")).toBe("Abra");
});

test("abra ka dabra should return Abra ka dabra", () => {
  expect(titleCase("abra ka dabra")).toBe("Abra Ka Dabra");
});
