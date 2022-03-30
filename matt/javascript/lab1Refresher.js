// Part 1 --------------------------------------------------------------

// Create an immutable variable called name and make it's value your name
const name = 'Matt'

// Create a mutable variable called age set it to your age.
let age = 33

//Increase the value of age by 1.
age += 1

// Print answer
console.log('Part 1: ', age + '\n')



// Part 2 --------------------------------------------------------------


// Create a function called add it should add 2 numbers together.
function add(num1, num2){
    return num1 + num2;
}

// Call that function and print the result.
console.log('Part 2: ', add(2,3)  + '\n')

// Create an anonymous function using const and the fat arrow syntax.
const hello = () => "this string comes from an Anonymous arrow function"

// Name it hello and have it print a message.
console.log("Part 2b: ", hello()  + '\n')


// Create another anonymous function called isEven, it should take in a number and return true if the number is even or false otherwise.
const isEven = (num) => num % 2 == 0 ? true : false

//print answer 
console.log("Part 2c: ", isEven(2) + '\n')

// Part 3 -------------------------------------------------------------

// Create an array of animals ['dog', 'cat', 'llama', 'bird'] as an immutable variable animals
const animals = ['dog', 'cat', 'llama', 'bird']

//Iterate over animals and print each string uppercase.
console.log("Part 3:")
for (animal of animals){
    console.log(animal.toUpperCase())
}

//Remove the item 'cat' from the array
const findCat = (e) => e === 'cat';
let catIndex = animals.findIndex(findCat)

animals.splice(catIndex, catIndex)

//Add the item 'opossum' to the array
animals.push("opossum")

//Get and remove the last value from animals
const poppedElement = animals.pop()

console.log("Part 3:b (removed element): " + poppedElement)
console.log("Part 3:c (new last element): " + animals[animals.length -1])
console.log("Part 3:d (new array): " + animals)



// Part 3 -------------------------------------------------------------

// Original Janky version 

// class Point {
//     constructor(x, y, x2, y2){
//         this.x = x
//         this.y = y  
//         this.x2 = x2
//         this.y2 = y2
//     }

//     getX() {
//         return this.x
//     }
//     getY() {
//         return this.y
//     }

//     distanceBetween(){

//         let minusX = this.x - this.x2
//         let minusY = this.y - this.y2

//         minusX *= minusX 
//         minusY *= minusY

//         return Math.sqrt(minusX + minusY)
       
//     }
// }

// let fristPoint= new Point (10, 10)
// let secondPoint = new Point(5, 5, fristPoint.getX(), fristPoint.getY())

// console.log("\n", secondPoint.distanceBetween())


// Alternate version 

class Point {
    constructor(x, y){
        this.x = x
        this.y = y  
    }

    getX() {
        return this.x
    }
    getY() {
        return this.y
    }

    distanceBetween(x2, y2){

        let minusX = this.x - x2
        let minusY = this.y - y2

        minusX *= minusX 
        minusY *= minusY

        return Math.sqrt(minusX + minusY)
       
    }
}

let fristPoint= new Point (10, 10)
let secondPoint = new Point(5, 5)


console.log("\n", secondPoint.distanceBetween(fristPoint.getX(), fristPoint.getY()))