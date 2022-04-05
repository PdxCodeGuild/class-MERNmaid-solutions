// Reece Adams - ADV JS - 3/29/22 - lab 2: Hello Node - Version 3 //

const nameArray = ['MARTINO','JUstin','mikE']

const speak = (name) => console.log(`Hello there ${name}!`);

const capitalize = (item) => {
    const lowerName = item.toLowerCase()
    const splitName = lowerName.split("")
    const upperLetter = splitName[0].toUpperCase()
    const slicedName = splitName.slice(1)
    const capName = upperLetter + slicedName.join('')
    return capName
};

const capArray = nameArray.map(i => speak(capitalize(i)));