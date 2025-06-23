// test.js
const assert = require('assert');

function add(a, b) {
  return a + b;
}

// Simple test
assert.strictEqual(add(2, 3), 5, '2 + 3 should equal 5');

console.log('All tests passed!');
