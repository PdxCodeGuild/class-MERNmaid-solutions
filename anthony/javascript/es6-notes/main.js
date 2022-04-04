const person = {
  name: "Harry Potter",
  age: 30,
};

person.age = 32;
person.house = "Gryffindor";

// person = {
//   name: "Ron",
//   age: 30,
// };

// console.log(person);

// let fruits = ["banana", "apple", "strawberry", "mango"];
// fruits.push("blueberry");

// fruits = ["red", "green", "blue"];

// console.log(fruits);
let number = add(3, 4);

// Will be hoisted to top of the file
function add(num1, num2) {
  // console.log(this);
  return num1 + num2;
}

// Will not be hoisted
const subtract = function (num2, num1) {
  return num2 - num1;
};

number = subtract(7, 4);
// console.log(number);

const multiply = (num1, num2) => {
  console.log(this);
  return num1 * num2;
};
// multiply(2, 4);

// shorthand arrow function
const greet = (name) => `Hello, ${name}`;

// console.log(greet("Hermione"));

let fruits = ["banana", "apple", "strawberry", "mango"];
let seasonalFruits = [...fruits];

seasonalFruits.push("kiwi");

// console.log(seasonalFruits);
// console.log(fruits);

//  rest
const sum = (...nums) => {
  let total = 0;
  for (num of nums) {
    total += num;
  }

  return total;
};

// console.log(sum(1, 2, 3, 4, 5, 6, 7));

class Randomizer {
  constructor(...choices) {
    this.choices = choices;
  }

  choice(arr = this.choices) {
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
  }

  options(panda) {
    const tempArr = [...this.choices, ...panda.choices];
    return this.choice(tempArr);
  }
}

const classNames = new Randomizer("octopus", "MERNmaid", "cat", "dog", "llama");
const randomCars = new Randomizer("nissan", "ford", "chevy");

classNames.options(randomCars);
// console.log(classNames.choice());
console.log(classNames.options(randomCars));
