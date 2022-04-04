// Reece Adams - ADV JS - 3/29/22 - lab 1: Refresher - Version 3 //

const animals = ['dog', 'cat', 'llama', 'bird']; // Create immutable array of animals 

for (let animal of animals) {
    let upperAnimal = animal.toUpperCase()
    console.log(upperAnimal)
}; // Iterate over and capitalize

// const index =animals.indexOf("cat"); // this makes it dynamic and better!!! use in future

animals.splice(1, 1); // Remove cat

animals.push('opossum'); // Add opossum

let lastValue = animals.length - 1;

let lastSaved = animals.pop(lastValue, 1); // Removes last item from array

console.log(lastSaved) // Showing it's saved