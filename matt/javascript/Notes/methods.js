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
// const itemNames = []
// for (item of items)
// {
//     item.name.push(itemNames)
// }

// Create a new array with just names of items but with uses the array method .map
const itemNames = items.map((item) =>{ return item.name})
// console.log(itemNames)




// Filter array without using the method

// const inexpensiveItems = []
// for (item of items)
// {
//   if (item.price < 100)
//   {
//     inexpensiveItems.push(item)
//   }
// }
// console.log(inexpensiveItems)

// Filter array using .filter
const inexpensiveItems = items.filter((item) => {
  return item.price < 100;
});

// console.log(inexpensiveItems)


const foundItem = items.find((item) => {
  return item.name === "Bike";
});

// console.log(foundItem);



// items.forEach((item) => {
//   console.log(`I bought ${item.name} for $${item.price}. What a steal!`)
// });


// true if some items are < 100
const cheapItems = items.some((item) => {
  return item.price < 0;
})

const expensiveItems = items.every((item) => {
  return item.price > 100;
})

// console.log(cheapItems)
// console.log(expensiveItems)


// Make a running total without reduce

// let totalPrice = 0;
// for (item of items)
// {
//   totalPrice += item.price
// }

// console.log(totalPrice)


// Make a running total WITH reduce
const totalPrice = items.reduce((runningTotal, item) => {
  return runningTotal + item.price; 
}, 0);

// console.log(totalPrice)


// .reduce example with concatination
const animals = ["cat", "dog", "mouse", "zebra"]
const stringAnimals = animals.reduce((concatenated, animal) => {
  return concatenated + " " + animal
})

// console.log(stringAnimals)