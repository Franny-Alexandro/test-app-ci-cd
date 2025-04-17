// tests/app.test.js

const { calculator } = require('../src/index');

describe('Calculator', () => {
  test('adds 5 + 3 to equal 8', () => {
    expect(calculator(5, 3, 'add')).toBe(8);
  });

  test('subtracts 10 - 4 to equal 6', () => {
    expect(calculator(10, 4, 'subtract')).toBe(6);
  });

  test('multiplies 2 * 3 to equal 6', () => {
    expect(calculator(2, 3, 'multiply')).toBe(6);
  });

  test('divides 10 / 2 to equal 5', () => {
    expect(calculator(10, 2, 'divide')).toBe(5);
  });

  test('throws error on divide by zero', () => {
    expect(() => calculator(10, 0, 'divide')).toThrow('Cannot divide by zero');
  });

  test('throws error on invalid operation', () => {
    expect(() => calculator(5, 5, 'mod')).toThrow('Invalid operation');
  });
});
