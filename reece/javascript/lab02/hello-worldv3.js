// Reece Adams - ADV JS - 3/29/22 - lab 3: Hello Node - Version 3 //

const string = 'mIKE'

const speak = (name) => console.log(`Hello there ${name}!`);

const capitalize = (name) => {
    const firstLetterUpper = name.slice(0, 1).toUpperCase()
    const restNameLower = name.slice(1).toLowerCase()
    return firstLetterUpper + restNameLower
};

speak(capitalize(string))