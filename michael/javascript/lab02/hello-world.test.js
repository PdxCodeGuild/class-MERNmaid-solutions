const assert = require("assert"); // Import assert to use it in the tests
const helloWorld = require("./hello-world.js"); // Import helloWorld to use it in the tests

const string = "llama"; // Declare a string variable
const array = ["llama", "cat", "dog"]; // Declare an array variable

// References: https://nodejs.org/api/assert.html
//             https://nodejs.org/api/assert.html#assertdeepstrictequalactual-expected-message

// Test capitalizeWord
assert.strictEqual(helloWorld.capitalizeWord(string), "Llama");

//Test speakWord
assert.strictEqual(
	helloWorld.speakWord(helloWorld.capitalizeWord(string)),
	"Hello there Llama!"
);

// Test capitalizeWords
assert.deepStrictEqual(helloWorld.capitalizeWords(array), [
	"Llama",
	"Cat",
	"Dog",
]);
