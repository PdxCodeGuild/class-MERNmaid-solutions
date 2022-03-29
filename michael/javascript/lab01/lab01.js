/*
Lab01
Michael
Class MERNmaid
2022
*/

// Part 1
console.log("\nPart 1");

// set name and age
const name = 'Michael'; // immutable
let age = 35; // mutable
age += 1; // increase age by 1

console.log(`Hello ${name}! You are ${age} years old.`);

// Part 2
console.log("\nPart 2");

// add two numbers
function add(num1, num2) {
    return num1 + num2;
};

console.log(`Add 1 and 2: ${add(1, 2)}`); // add 1 and 2 and print 3 (the result) to console

// print hello world
const hello = () => { // anonymous arrow function
    console.log(`Hello World!`); // prints Hello World! to console
};

hello(); // prints Hello World! to console

// check if a number is even
const isEven = (num) => { // named arrow function
    return num % 2 === 0; // returns true if num is even
};

console.log(`Is 2 even? ${isEven(2)}`); // prints Is 2 even? true to console
console.log(`Is 5 even? ${isEven(5)}`); // prints Is 5 even? false to console

// Part 3
console.log("\nPart 3");

// sets the array
const animals = ['dog', 'cat', 'llama', 'bird']; // array of animal strings
console.log(`There are ${animals} in the array.`);

// prints the array out in all upper case
console.log("toUpperCase:");
for (const animal of animals) { // for each animal in the array
    console.log(animal.toUpperCase());
};

// removes 'cat' from the array
for (const animal in animals) {  // for each animal in the array
    if (animals[animal] === "cat") { // if the current animal is cat, could have written as function.
        animals.splice(animal, 1); // remove cat from array
    };
};
console.log(animals);

// removes the last element from the array and returns it
const lastValue = animals.pop(); // removes last value from array
console.log(`Last value: ${lastValue} removed.`);
console.log(animals);

// Part 4
console.log("\nPart 4"); 

// class Point finds the distance between two points
class Point { // class
    constructor(x1, y1) { // constructor function
        this.x = x1;
        this.y = y1;
    }
    distanceBetween(x2, y2) { // method
        return Math.sqrt(Math.pow(x2 - this.x, 2) + Math.pow(y2 - this.y, 2)); // returns distance between two points
    };
};

const points = new Point(1, 5); // creates a new point with x = 1 and y = 5

console.log(`Distance between (1, 5) and (2, 6): ${points.distanceBetween(2, 6)}\n`); // prints the distance between (1, 5) and (2, 6) as 1.4142135623730951 (the result) to console
