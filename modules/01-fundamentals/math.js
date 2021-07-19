const sum = (a, b) => a + b
const subtract = (a, b) => a - b

const asyncSum = (a, b) => Promise.resolve(sum(a, b))
const asyncSubtract = (a, b) => Promise.resolve(subtract(a, b))

module.exports = {
  sum,
  subtract,
  asyncSum,
  asyncSubtract,
}
