const { add, subtract, multiply, divide } = require('../calculator');

describe('Calculator Functions', () => {
  // Addition tests
  describe('add()', () => {
    test('should add two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should add two negative numbers', () => {
      expect(add(-2, -3)).toBe(-5);
    });

    test('should add positive and negative numbers', () => {
      expect(add(10, -5)).toBe(5);
    });

    test('should add decimals', () => {
      expect(add(1.5, 2.5)).toBe(4);
    });

    test('should add with zero', () => {
      expect(add(5, 0)).toBe(5);
    });

    test('should add large numbers', () => {
      expect(add(1000000, 2000000)).toBe(3000000);
    });
  });

  // Subtraction tests
  describe('subtract()', () => {
    test('should subtract two positive numbers', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('should subtract resulting in negative', () => {
      expect(subtract(5, 10)).toBe(-5);
    });

    test('should subtract two negative numbers', () => {
      expect(subtract(-2, -3)).toBe(1);
    });

    test('should subtract decimals', () => {
      expect(subtract(5.5, 2.5)).toBe(3);
    });

    test('should subtract with zero', () => {
      expect(subtract(5, 0)).toBe(5);
    });

    test('should subtract large numbers', () => {
      expect(subtract(5000000, 2000000)).toBe(3000000);
    });
  });

  // Multiplication tests
  describe('multiply()', () => {
    test('should multiply two positive numbers', () => {
      expect(multiply(45, 2)).toBe(90);
    });

    test('should multiply positive and negative', () => {
      expect(multiply(5, -3)).toBe(-15);
    });

    test('should multiply two negative numbers', () => {
      expect(multiply(-4, -5)).toBe(20);
    });

    test('should multiply decimals', () => {
      expect(multiply(2.5, 4)).toBe(10);
    });

    test('should multiply by zero', () => {
      expect(multiply(5, 0)).toBe(0);
    });

    test('should multiply by one', () => {
      expect(multiply(7, 1)).toBe(7);
    });

    test('should multiply large numbers', () => {
      expect(multiply(1000, 2000)).toBe(2000000);
    });
  });

  // Division tests
  describe('divide()', () => {
    test('should divide two positive numbers', () => {
      expect(divide(20, 5)).toBe(4);
    });

    test('should divide positive by negative', () => {
      expect(divide(10, -2)).toBe(-5);
    });

    test('should divide two negative numbers', () => {
      expect(divide(-20, -5)).toBe(4);
    });

    test('should divide resulting in decimal', () => {
      expect(divide(5, 2)).toBe(2.5);
    });

    test('should divide by one', () => {
      expect(divide(7, 1)).toBe(7);
    });

    test('should throw error on division by zero', () => {
      expect(() => divide(10, 0)).toThrow('Division by zero is not allowed');
    });

    test('should throw error type Error on division by zero', () => {
      expect(() => divide(5, 0)).toThrow(Error);
    });

    test('should divide large numbers', () => {
      expect(divide(2000000, 1000)).toBe(2000);
    });

    test('should divide small decimals', () => {
      expect(divide(0.5, 0.5)).toBe(1);
    });
  });

  // Integration tests
  describe('Mixed operations', () => {
    test('should chain operations correctly', () => {
      const step1 = add(10, 5);
      const step2 = multiply(step1, 2);
      const step3 = divide(step2, 5);
      expect(step3).toBe(6);
    });

    test('should handle complex calculation: (10 + 5) * 2 - 8 / 4', () => {
      const step1 = add(10, 5);
      const step2 = multiply(step1, 2);
      const step3 = divide(8, 4);
      const result = subtract(step2, step3);
      expect(result).toBe(28);
    });
  });
});
