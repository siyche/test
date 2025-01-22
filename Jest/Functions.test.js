const { div, containsNumbers } = require('./Functions'); // Adjust the path if necessary

// Test cases for div() function
describe('Testing div function', () => {
  
  // Test: Regular division
  test('dividing two positive numbers', () => {
    const result = div(10, 2);
    expect(result).toBe(5); // 10 divided by 2 should equal 5
  });

  // Test: Division by zero
  test('dividing by zero should throw an error', () => {
    expect(() => div(10, 0)).toThrow('Cannot divide by zero'); // Should throw an error
  });

  // Test: Dividing negative numbers
  test('dividing a negative number by a positive number', () => {
    const result = div(-10, 2);
    expect(result).toBe(-5); // -10 divided by 2 should equal -5
  });

  test('dividing a positive number by a negative number', () => {
    const result = div(10, -2);
    expect(result).toBe(-5); // 10 divided by -2 should equal -5
  });

  // Test: Dividing two negative numbers
  test('dividing two negative numbers', () => {
    const result = div(-10, -2);
    expect(result).toBe(5); // -10 divided by -2 should equal 5
  });

  // Test: Division result with decimals
  test('dividing with decimal result', () => {
    const result = div(5, 2);
    expect(result).toBeCloseTo(2.5); // 5 divided by 2 should equal approximately 2.5
  });
});

// Test cases for containsNumbers() function
describe('Testing containsNumbers function', () => {
  
  // Test: Text containing numbers
  test('text containing numbers', () => {
    const result = containsNumbers('Hello 123');
    expect(result).toBe(true); // Should return true because "123" is in the text
  });

  // Test: Text with no numbers
  test('text with no numbers', () => {
    const result = containsNumbers('Hello World');
    expect(result).toBe(false); // Should return false because no numbers are present
  });

  // Test: Empty string
  test('empty text', () => {
    const result = containsNumbers('');
    expect(result).toBe(false); // Should return false because the string is empty
  });

  // Test: Text with special characters and numbers
  test('text with special characters and numbers', () => {
    const result = containsNumbers('Hello @123! World');
    expect(result).toBe(true); // Should return true because "123" is in the text
  });

  // Test: Text with only numbers
  test('text with only numbers', () => {
    const result = containsNumbers('1234567890');
    expect(result).toBe(true); // Should return true because the string is all numbers
  });

  // Test: Text with spaces
  test('text with spaces but no numbers', () => {
    const result = containsNumbers('Hello   World');
    expect(result).toBe(false); // Should return false because there are no numbers
  });
});
