// Part 2: Writing simple tests

// Create another file called hello-world.test.js and import them using object destructuring.
const { capitalize, speak } = require('./hello-world');
const assert = require('assert');

// Write some test cases to see if your capitalize function works
function testCapitalize() {
  return (
    capitalize("bug") === "Bug",
    capitalize("tooth") === "Tooth",
    capitalize("barn") === "Barn"
  );
}

console.log(testCapitalize());

// Use the assert Node module to test your capitalize function.

assert.strictEqual(capitalize("croissant"), "Croissant");
assert.strictEqual(capitalize("park"), "Park");
assert.strictEqual(capitalize("the big black dog"), "The Big Black Dog");
