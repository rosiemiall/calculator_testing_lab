const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expected = 50000;
    actual = sum(27800, 22200);
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    expected = -5;
    actual = sum(-2, -3);
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    expected = 2;
    actual = sum(2, 0);
    expect(actual).toBe(expected);
  });

});

describe('subtract', () => {
  test('can subtract two small positive numbers', () => {
    expected = -1;
    actual = subtract(2, 3);
    expect(actual).toBe(expected);
  });

  test('can subtract two large positive numbers', () => { 
    expected = 5600;
    actual = subtract(27800, 22200);
    expect(actual).toBe(expected);
  });

  test('can subtract two negative numbers', () => {
    expected = 1;
    actual = subtract(-2, -3);
    expect(actual).toBe(expected);
  });

  test('can subtract zero', () => {
    expected = 2;
    actual = subtract(2, 0);
    expect(actual).toBe(expected);
  });
});

describe('multiply', () => {
  test('can multiply two small positive numbers', () => {
    expected = 6;
    actual = multiply(2, 3);
    expect(actual).toBe(expected);
  });

  test('can multiply two large positive numbers', () => { 
    expected = 4440000;
    actual = multiply(200, 22200);
    expect(actual).toBe(expected);
  });

  test('can multiply two negative numbers', () => {
    expected = 6;
    actual = multiply(-2, -3);
    expect(actual).toBe(expected);
  });

  test('can multiply by zero', () => {
    expected = 0;
    actual = multiply(2, 0);
    expect(actual).toBe(expected);
  });
});

describe('divide', () => {
  test('can divide two small positive numbers', () => {
    expected = 2;
    actual = divide(6, 3);
    expect(actual).toBe(expected);
  });

  test('can divide two large positive numbers', () => { 
    expected = 100;
    actual = divide(20000, 200);
    expect(actual).toBe(expected);
  });

  test('can divide two negative numbers', () => {
    expected = 2;
    actual = divide(-6, -3);
    expect(actual).toBe(expected);
  });

  test('cannot divide by zero', () => {
    expected = Infinity;
    actual = divide(2, 0);
    expect(actual).toBe(expected);
  });
});

describe('modulus', () => {
  test('can use modulus on two small positive numbers', () => {
    expected = 0;
    actual = modulus(6, 3);
    expect(actual).toBe(expected);
  });

  test('can us modulus on two large positive numbers', () => { 
    expected = 200;
    actual = modulus(20000, 300);
    expect(actual).toBe(expected);
  });

  test('can us modulus on two negative numbers', () => {
    expected = -2;
    actual = modulus(-6, -4);
    expect(actual).toBe(expected);
  });

  test('can modulo by zero', () => {
    expected = NaN;
    actual = modulus(2, 0);
    expect(actual).toBe(expected);
  });
});

describe('even', () => {

});

describe('odd', () => {

});
