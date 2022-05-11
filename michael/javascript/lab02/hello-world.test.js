const assert = require("assert"); // Import assert to use it in the tests
const helloWorld = require("./hello-world.js"); // Import helloWorld to use it in the tests

const string = "Llama"; // Declare a string variable
const array = ["Llama", "Cat", "Dog"]; // Declare an array variable

// References: https://nodejs.org/api/assert.html
//             https://nodejs.org/api/assert.html#assertdeepstrictequalactual-expected-message

// Get a string as input

// Test capitalizeWord
assert.strictEqual(helloWorld.capitalizeWord(string), "Llama"); // Test if the function returns the correct value

// assert.strictEqual(helloWorld.capitalizeWord(string), "lLama"); // This test should fail

// assert.strictEqual(helloWorld.capitalizeWord(string), "LlAMA"); // This test should fail

//Test speakWord
assert.strictEqual(
	helloWorld.speakWord(helloWorld.capitalizeWord(string)),
	"Hello there Llama!"
); // Test if the function returns the correct value

// assert.strictEqual(
// 	helloWorld.speakWord(helloWorld.capitalizeWord(string)),
// 	"Hello Llama!"
// ); // This test should fail

// assert.strictEqual(
// 	helloWorld.speakWord(helloWorld.capitalizeWord(string)),
// 	"Llama!"
// ); // This test should fail

// Test capitalizeWords
assert.deepStrictEqual(helloWorld.capitalizeWords(array), [
	"Llama",
	"Cat",
	"Dog",
]); // Test if the function returns the correct value

// assert.deepStrictEqual(helloWorld.capitalizeWords(array), ["Llama", "Dog"]); // This test should fail

// assert.deepStrictEqual(helloWorld.capitalizeWords(array), [
// 	"Dog",
// 	"Cat",
// 	"Llama",
// ]); // This test should fail
