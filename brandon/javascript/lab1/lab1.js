// PART 1 ------------------------

// Create an immutable variable called name and make it's value your name
const name = "Brandon";

// Create a mutable variable called age set it to your age.
let age = 31;

// Increase the value of age by 1.
age += 1;

// PART 2 ------------------------

// Create a function called add it should add 2 numbers together.
function add(...numbers) {
  let sum = 0;

  for(number of numbers) {
    sum += number
  }

  return sum;
}

// Call that function and print the result.
console.log(add(1,2));

// Create an anonymous function using const and the fat arrow syntax.
// Name it hello and have it print a message.
const hello = () => console.log("you've got mail!");

// Create another anonymous function called isEven, it should take in a number and return true if the number is even or false otherwise.
const isEven = (number) => {
  return number % 2 == 0;
}

// PART 3 ------------------------

// Create an array of animals ['dog', 'cat', 'llama', 'bird'] as an immutable variable animals
const animals = ['dog', 'cat', 'llama', 'bird'];

// Iterate over animals and print each string uppercase.
for(animal of animals) {
  console.log(animal.toUpperCase());
};

// Remove the item 'cat' from the array
const catId = animals.indexOf("cat");
animals.splice(catId, 1);

// Add the item 'opossum' to the array
animals.push("opossum");

// Get and remove the last value from animals
let lastValueFromAnimals = animals.pop();

// PART 4 ------------------------

// Create a class called Point
class Point {

  // Inside it's constructor give it 2 attributes, x and y
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  // Write a method to find the distance between 2 points.
  distance(point) {
    const x = this.x - point.x;
    const y = this.y - point.y;

    return Math.sqrt(Math.pow(x,2) + Math.pow(y, 2));
  }

}

const pointA = new Point(1, 2);
const pointB = new Point(3, 4);

console.log(pointA.distance(pointB));

