// Part 1: Functions

//The capitalize function should take in a string and should return back the string but with the first letter capitalized.
// const capitalize = (string) => {
//     const splicedString = string.slice(1)
//     return string.charAt(0).toUpperCase() + splicedString
// };
// console.log(capitalize("hello"))

// The speak function should take in a name and output this message to the terminal: "Hello there $NAME!" (Replace $NAME with the result from capitialize)
const speak = (string) => console.log(`Hello there ${string}!`);
// speak(capitalize("matt"));

// Part 2: Writing simple tests
// Export your capitalize and speak functions from the hello-world.js module.


// Part 3
const names = ["matt", "tim", "bob"]

const capitalize = names.map((name) => { 
    const splicedString = name.slice(1) 
    return " " + name.charAt(0).toUpperCase() + splicedString ;
})


module.exports = {
    capitalize,
    speak
}