const items = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "Keyboard", price: 25 },
];

// Create new array with just names of items
// const itemNames = [];
// for (item of items) {
//   itemNames.push(item.name);
// }

// .map method
const itemNames = items.map((item) => {
  return item.name;
});

// const inexpensiveItems = [];
// for (item of items) {
//   if (item.price < 100) {
//     inexpensiveItems.push(item);
//   }
// }
const inexpensiveItems = items.filter((item) => {
  return item.price > 100;
});

// returns first item if found
const foundItem = items.find((item) => {
  return item.price === 1000000;
});

// items.forEach((item) => {
//   console.log(`I bought ${item.name} for $${item.price}. What a steal!`);
// });

// true if some items are < 100
const cheapItems = items.some((item) => {
  return item.price < 0;
});

const expensiveItems = items.every((item) => {
  return item.price > 100;
});

// let totalPrice = 0;
// for (const item of items) {
//   totalPrice += item.price;
// }

const totalPrice = items.reduce((runningTotal, item) => {
  return runningTotal + item.price;
}, 0);

const animals = ["cat", "dog", "mouse", "zebra"];
const stringAnimals = animals.reduce((concatenated, animal) => {
  return concatenated + " " + animal;
}, "");

console.log(stringAnimals);
