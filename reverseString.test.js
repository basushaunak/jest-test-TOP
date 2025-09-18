const reverseString = require("./reverseString");

test("undefined returns undefined", () => {
  expect(reverseString(undefined)).toBe(undefined);
});

test("100 returns 100", () => {
  expect(reverseString(100)).toBe(100);
});

test("'100' returns '100'", () => {
  expect(reverseString('100')).toBe('001');
});

test("'.' returns '.'", () => {
  expect(reverseString('.')).toBe('.');
});

test("'' returns ''", () => {
  expect(reverseString('')).toBe('');
});

test("'a' returns 'a'", () => {
  expect(reverseString('a')).toBe('a');
});


test("'banana' returns 'ananab'", () => {
  expect(reverseString('banana')).toBe('ananab');
});

test("'abra ka dabra' returns 'arbad ak arba'", () => {
  expect(reverseString('abra ka dabra')).toBe('arbad ak arba');
});

test("'Anonymous321' returns '321suomynonA'", () => {
  expect(reverseString('Anonymous321')).toBe('123suomynonA');
});
