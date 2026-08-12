const { test } = require('node:test');
const assert = require('node:assert');
const { sum, average } = require('./sum.js');

test('sum addiert zwei Zahlen', () => {
  assert.strictEquali(sum(2, 3), 5);
});

test('sum funktioniert mit negativen Zahlen', () => {
  assert.strictEqual(sum(-2, 7), 5);
});

test('average berechnet den Durchschnitt', () => {
  assert.strictEqual(average([2, 4, 6]), 4);
});

test('average gibt 0 be leerem Array zurück', () => {
  assert.strictEqual(average([]), 0);
});
