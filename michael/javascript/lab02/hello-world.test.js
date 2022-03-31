const assert = require("assert"); // Import assert to use it in the tests
const helloWorld = require("./hello-world.js"); // Import helloWorld to use it in the tests

const string = "Llama"; // Declare a string variable
const array = ["llama", "cat", "dog"]; // Declare an array variable

// References: https://nodejs.org/api/assert.html

// Test capitalizeWord
assert.strictEqual(helloWorld.capitalizeWord(string), string);

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
