// Reece Adams - ADV JS - 3/31/22 - lab 3: Hello Node - Version 1 //

// In a file called hello-world.js write a program that contains 2 fat-arrow functions, one called speak and another called capitalize.

// The speak function should take in a name and output this message to the terminal: "Hello there $NAME!" (Replace $NAME with the result from capitialize)
const speak = (name) => console.log(`Hello there ${name}!`);

// The capitalize function should take in a string and should return back the string but with the first letter capitalized.

const capitalize = (item) => {
    const lower = item.toLowerCase();
    let letter = lower.charAt(0).toUpperCase();
    return letter + lower.substring(1);
};

// speak(capitalize('paul'))

module.exports = {
    speak,
    capitalize,
};