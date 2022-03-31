const speak = (name) => {
  console.log(`Hello there ${capitalize(name)}!`);
};

const capitalize = (word) => {
  return word[0].toUpperCase() + word.slice(1);
};

module.exports = {
  speak,
  capitalize,
};