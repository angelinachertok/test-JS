import { Calculator } from '../src/calculator.js';

describe('Calculator', () => {
  let calc;

  beforeEach(() => {
    calc = new Calculator();
  });

  describe('add', () => {
    test('should return correct sum', () => {
      expect(calc.add(5, 5)).toBe(10);
    });

    test('should work with negative numbers', () => {
      expect(calc.add(-3, 7)).toBe(4);
    });

    test('should work with decimals', () => {
      expect(calc.add(2.5, 3.5)).toBe(6);
    });
  });

  describe('power', () => {
    test('should return correct value', () => {
      expect(calc.power(2, 3)).toBe(8);
    });

    test('should work with zero exponent', () => {
      expect(calc.power(5, 0)).toBe(1);
    });
  });

  describe('squareRoot', () => {
    test('should throw when negative', () => {
      expect(() => calc.squareRoot(-1)).toThrow(RangeError);
    });

    test('should throw with correct message', () => {
      expect(() => calc.squareRoot(-1)).toThrow('Negative numbers not allowed');
    });

    test.each([
      [4, 2],
      [25, 5],
      [81, 9],
      [144, 12],
    ])('should return correct square root for %i', (input, expected) => {
      expect(calc.squareRoot(input)).toBe(expected);
    });
  });

  describe('history', () => {
    test('should track operations', () => {
      calc.clearHistory();
      calc.add(2, 2);
      expect(calc.history).toHaveLength(1);
      expect(calc.history[0]).toBe('2 + 2 = 4');
    });

    test('should track multiple operations', () => {
      calc.add(1, 1);
      calc.power(2, 3);
      calc.squareRoot(16);
      expect(calc.history).toHaveLength(3);
    });

    test('should be cleared', () => {
      calc.add(1, 1);
      calc.clearHistory();
      expect(calc.history).toHaveLength(0);
    });

    test('should return copy not reference', () => {
      calc.add(1, 1);
      const history1 = calc.history;
      history1.push('fake operation');
      expect(calc.history).not.toContain('fake operation');
    });
  });

  describe('divide', () => {
    test('should return correct quotient', () => {
      expect(calc.divide(10, 2)).toBe(5);
    });

    test('should throw when dividing by zero', () => {
      expect(() => calc.divide(10, 0)).toThrow(Error);
    });

    test('should throw with correct message', () => {
      expect(() => calc.divide(10, 0)).toThrow('Cannot divide by zero');
    });
  });
});
