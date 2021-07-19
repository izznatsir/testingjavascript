const { sum, subtract, asyncSum, asyncSubtract } = require('./math.js')

test(`'sum' adds two numbers`, () => {
  const result = sum(3, 7)
  const expected = 10

  expect(result).toBe(expected)
})

test(`'subtract' subtracts numbers`, () => {
  const result = subtract(7, 3)
  const expected = 4

  expect(result).toBe(expected)
})

test(`'sum' adds two numbers asynchronously`, async () => {
  const result = await asyncSum(3, 7)
  const expected = 10

  expect(result).toBe(expected)
})

test(`'subtract' subtracts numbers asynchronously`, async () => {
  const result = await asyncSubtract(7, 3)
  const expected = 4

  expect(result).toBe(expected)
})
