// Part 1: Functions

// In a file called hello-world.js write a program that contains 2 fat-arrow functions, one called speak and another called capitalize.

// The capitalize function should take in a string and should return back the string but with the first letter capitalized.
// Part 3: Using the functional concepts
// Allow the capitalize function to work on multiple words.
// Try and use the map method on Array to solve the problem.
const capitalize = (...strings) => {
  return strings.map(string => string[0].toUpperCase() + string.slice(1));
}

console.log(capitalize("the", "big", "black", "dog"));

// The speak function should take in a name and output this message to the terminal: "Hello there $NAME!" (Replace $NAME with the result from capitialize)
const speak = (name) => {
  return `Hello there ${capitalize(name)}!`
}

console.log(speak("brandon"));

// Export your capitalize and speak functions from the hello-world.js module.
module.exports = { capitalize, speak };

