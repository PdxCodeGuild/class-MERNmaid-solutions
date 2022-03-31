const speak = (name) => {
  console.log(`Hello there ${capitalize(name)}!`);
};

const capitalize = (word) => {
  return word.replace(/\b\w, (l) => {return l.toUpperCase});
};

module.exports = {
  speak,
  capitalize,
};