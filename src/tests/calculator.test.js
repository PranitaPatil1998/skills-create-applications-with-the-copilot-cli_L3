const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

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

  // Modulo tests
  describe('modulo()', () => {
    test('should calculate modulo from image: 5 % 2', () => {
      expect(modulo(5, 2)).toBe(1);
    });

    test('should calculate modulo with positive numbers', () => {
      expect(modulo(10, 3)).toBe(1);
    });

    test('should calculate modulo with result of zero', () => {
      expect(modulo(20, 4)).toBe(0);
    });

    test('should calculate modulo with positive and negative', () => {
      expect(modulo(10, -3)).toBe(1);
    });

    test('should calculate modulo with two negative numbers', () => {
      expect(modulo(-10, -3)).toBe(-1);
    });

    test('should calculate modulo with decimals', () => {
      expect(modulo(5.5, 2)).toBe(1.5);
    });

    test('should throw error on modulo by zero', () => {
      expect(() => modulo(10, 0)).toThrow('Division by zero is not allowed');
    });

    test('should calculate large number modulo', () => {
      expect(modulo(1000000, 7)).toBe(1);
    });
  });

  // Power/Exponentiation tests
  describe('power()', () => {
    test('should calculate power from image: 2 ^ 3', () => {
      expect(power(2, 3)).toBe(8);
    });

    test('should calculate power with positive exponent', () => {
      expect(power(5, 2)).toBe(25);
    });

    test('should calculate power with exponent of 0', () => {
      expect(power(10, 0)).toBe(1);
    });

    test('should calculate power with exponent of 1', () => {
      expect(power(7, 1)).toBe(7);
    });

    test('should calculate power with negative exponent', () => {
      expect(power(2, -2)).toBe(0.25);
    });

    test('should calculate power with negative base', () => {
      expect(power(-2, 3)).toBe(-8);
    });

    test('should calculate power with fractional exponent', () => {
      expect(power(4, 0.5)).toBe(2);
    });

    test('should calculate large power', () => {
      expect(power(10, 3)).toBe(1000);
    });

    test('should calculate power with decimal base', () => {
      expect(power(2.5, 2)).toBe(6.25);
    });
  });

  // Square root tests
  describe('squareRoot()', () => {
    test('should calculate square root from image: √16', () => {
      expect(squareRoot(16)).toBe(4);
    });

    test('should calculate square root of perfect square', () => {
      expect(squareRoot(25)).toBe(5);
    });

    test('should calculate square root of zero', () => {
      expect(squareRoot(0)).toBe(0);
    });

    test('should calculate square root of one', () => {
      expect(squareRoot(1)).toBe(1);
    });

    test('should calculate square root of non-perfect square', () => {
      expect(squareRoot(2)).toBeCloseTo(1.414, 3);
    });

    test('should calculate square root of decimal', () => {
      expect(squareRoot(0.25)).toBe(0.5);
    });

    test('should calculate square root of large number', () => {
      expect(squareRoot(1000000)).toBe(1000);
    });

    test('should throw error on square root of negative number', () => {
      expect(() => squareRoot(-5)).toThrow('Square root of negative numbers is not allowed');
    });

    test('should throw error type Error on negative square root', () => {
      expect(() => squareRoot(-1)).toThrow(Error);
    });

    test('should throw error for negative zero', () => {
      expect(() => squareRoot(-0.0001)).toThrow('Square root of negative numbers is not allowed');
    });
  });

  // Integration tests with new operations
  describe('Mixed operations with extended functions', () => {
    test('should chain new operations: 2^3 + 5 % 2', () => {
      const step1 = power(2, 3);
      const step2 = modulo(5, 2);
      const result = add(step1, step2);
      expect(result).toBe(9);
    });

    test('should calculate: √16 * 2^3 / 4', () => {
      const step1 = squareRoot(16);
      const step2 = power(2, 3);
      const step3 = multiply(step1, step2);
      const result = divide(step3, 4);
      expect(result).toBe(8);
    });

    test('should calculate: (10 % 3) + √25 - 2^2', () => {
      const step1 = modulo(10, 3);
      const step2 = squareRoot(25);
      const step3 = power(2, 2);
      const temp = add(step1, step2);
      const result = subtract(temp, step3);
      expect(result).toBe(2);
    });
  });
});
