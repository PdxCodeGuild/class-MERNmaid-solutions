/* let name = "Harry";

name = "Harry Potter";

console.log(name); */

const person = { 
    name: "Harry Potter",
    age: 30,
};

// Cannot do this
// person = {
//     name: "Ron",
//     age: 30,
// }


person.age = 32;
person.house = "Gryffindor";

// console.log(person);

let fruits = ["apples", "oranges", "bananas", "mangos"];
fruits.push ("grapes");

fruits = ["red", "green", "blue"]; // Cannot do if const

// console.log(fruits);

function add(a, b) {
    return a + b;
};

let number = add(3, 4);

// Anonymous function, can't hoist
const subtract = function (a, b) {
    //console.log(this);
    return a - b;
};


number = subtract(3, 4);
// console.log(number);

// Anonymous function, can't hoist
const multiply = (a, b) => {
    //console.log(this);
    return a * b;
};

number = multiply(3, 4);

// console.log(number);

const greet = name => `Hello ${name}`;


// console.log(greet("Hermione"));

const sum = (...numbers) => {
    let total = 0;
    for (let number in numbers) {
        total += number;
    }
    return total;
};

// console.log(sum(1, 2, 3, 4, 5,6,7));

class Randomizer {
    constructor(...choices) {
        this.choices = choices;
    }
    
    choice() {
        return this.choices[Math.floor(Math.random() * this.choices.length)];
    }
}

console.log(new Randomizer("MERNmaid", "Octopus").choice());