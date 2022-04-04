// Part 1

const word = "llama";

// Capitalize the first letter of the word
function capitalizeWord(word) {
	return word.charAt(0).toUpperCase() + word.slice(1);
	// Get First Character
	// Capitalize First Character
	// Combine the new capitalized first character with the rest of the word
	// Source: https://stackoverflow.com/a/1026087
}

// "Speak" the word using terminal
function speakWord(word) {
	console.log(`Hello there ${word}!`);
	return `Hello there ${word}!`;
}

speakWord(capitalizeWord(word));

// Part 2

let words = ["llama", "cat", "dog"];

// Capitalize each word in the array
function capitalizeWords(words) {
	const NewWord = words.map((word) => capitalizeWord(word));
	return NewWord;
}

console.log(capitalizeWords(words));

// Export the functions
module.exports = {
	capitalizeWord,
	speakWord,
	capitalizeWords,
};
