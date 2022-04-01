const capitalize = (string) => {
    return string[0].toUpperCase() + string.slice(1);
    // Use indici of 0 to isolate first letter. Concantinate with .slice to add the letters after.

}
// console.log(capitalize('heyyyy'))

const speak = (name) => {
    return `Hello there ${name}!`;
}
console.log(speak(capitalize('christian')))

module.exports = {
    speak,
    capitalize,
}