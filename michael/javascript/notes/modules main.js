const { add, greeting } = require("./modules.js");
const fs = require("fs");

// console.log(hello); // prints greeting object
console.log(greeting); // prints greeting string
console.log(add(3, 4)); // prints 7

console.log(fs.readdirSync("./"));

const text = fs.readFileSync("./cart.json");

const cart = JSON.parse(text);

console.log(cart);

const itemsB = cart.filter((item) => item.name.toLowerCase().startsWith("b"));

console.log(itemsB);

module.exports = {
	itemsB,
};
