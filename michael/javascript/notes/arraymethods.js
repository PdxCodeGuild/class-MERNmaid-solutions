const print = console.log;

const items = [
	{ name: "Bike", price: 100 },
	{ name: "TV", price: 200 },
	{ name: "Album", price: 10 },
	{ name: "Book", price: 5 },
	{ name: "Phone", price: 500 },
	{ name: "Computer", price: 1000 },
	{ name: "Keyboard", price: 25 },
];

// Create a new array with just names of items
// const itemNames = [];
// for (const item of items) {
// 	itemNames.push(item.name);
// }

//.map method
const itemNames = items.map((item) => item.name);

// console.log(itemNames);

// Create a new array with items that cost less than 100
// const cheapItems = [];
// for (const item of items) {
// 	if (item.price < 100) {
// 		cheapItems.push(item);
// 	}
// }

const cheapItems = items.filter((item) => item.price < 100);

// console.log(cheapItems);

// Returns first item if it exists, otherwise undefined
const findBook = items.find((item) => item.name === "Book");

// console.log(findBook);

// returns each item's name and price
// items.forEach((item) => console.log(`${item.name} costs $${item.price}!`));

// return if some items are in the array
const hasBook = items.some((item) => item.name === "Book");

// console.log(hasBook);

// returns if every item matches
const expensiveItems = items.every((item) => item.price > 0);

// console.log(expensiveItems);

// const total = items.reduce((total, item) => {
// 	return total + item.price;
// }, 0);

// const total = items.reduce((total, item) => total + item.price, 0);

console.log(total);
