const { greet, add } = require('./index');

test('greets with name', () => {
  expect(greet('Jenkins')).toBe('Hello, Jenkins! Welcome to Jenkins Learning!');
});

test('greets with default', () => {
  expect(greet('World')).toBe('Hello, World! Welcome to Jenkins Learning!');
});

test('adds two numbers', () => {
  expect(add(2, 3)).toBe(5);
});

test('adds negative numbers', () => {
  expect(add(-1, 1)).toBe(0);
});