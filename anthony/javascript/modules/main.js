const { add, greeting, findCenterOfTheEarth: findX } = require("./modules.js");
const fs = require("fs");

const sum = add(3, 4);

const text = fs.readFileSync("./cart.json");

const cart = JSON.parse(text);

const bItems = cart.filter((item) => {
  return item.name.toLowerCase().startsWith("b");
});

module.exports = {
  items: bItems,
};
