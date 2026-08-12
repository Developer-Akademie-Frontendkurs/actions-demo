// Small project for a GitHub Actions Demo Call

function sum(a, b) {
  return a + b;
}

function average(numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  return numbers.reduce((acc, n) => acc + n, 0) / numbers.length;
}

module.exports = { sum, average };
