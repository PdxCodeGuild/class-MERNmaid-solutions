const speak = (name) => {
  console.log(`Hello there ${capitalize(name)}!`);
};

const capitalize = (word) => {
  return word.replace(/\b\w/gi, (l) => {return l.toUpperCase()});
};

const capNoRegBS = (words) => {
  const wordArray = words.split(" ")
  return wordArray.map((word) => {return word[0].toUpperCase() + word.slice(1)}).reduce((sentence, word) => {return sentence + " " + word})
};

console.log(capNoRegBS("one two three"))

module.exports = {
  speak,
  capitalize,
  capNoRegBS,
};