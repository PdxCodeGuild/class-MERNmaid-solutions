// Part 1
// Create an immutable variable called name and make it's value your name
// Create a mutable variable called age set it to your age.
// Increase the value of age by 1.
const name = "anthony";
let age = 30;

age += 1;

// Part 2
// Create a function called add it should add 2 numbers together.
// Call that function and print the result.
// Create an anonymous function using const and the fat arrow syntax.
// Name it hello and have it print a message.
// Create another anonymous function called isEven,
// it should take in a number and return true if the
// number is even or false otherwise.
function add(num1, num2) {
  return num1 + num2;
}

// console.log(add(2, 4));

const hello = () => {
  console.log("Hi there!");
};

const isEven = (num) => {
  return num % 2 === 0;
};

// console.log(isEven(5));

// Part 3
// Create an array of animals ['dog', 'cat', 'llama', 'bird'] as an
// immutable variable animals
// Iterate over animals and print each string uppercase.
// Remove the item 'cat' from the array
// Add the item 'opossum' to the array
// Get and remove the last value from animals

const animals = ["dog", "cat", "llama", "bird"];

for (animal of animals) {
  console.log(animal.toUpperCase());
}

const index = animals.indexOf("cat");
animals.splice(index, 1);

animals.push("opossum");

const lastAnimal = animals.pop();

// Part 4
// Create a class called Point
// Inside it's constructor give it 2 attributes, x and y
// Write a method to find the distance between 2 points.
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  distanceBetween(point) {
    const x = this.x - point.x;
    const y = this.y - point.y;

    return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
  }
}

const pointA = new Point(3, 4);
const pointB = new Point(2, 7);

console.log(pointA.distanceBetween(pointB));

// console.log(pointA);
