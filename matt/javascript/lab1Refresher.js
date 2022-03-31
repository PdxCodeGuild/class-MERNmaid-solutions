// Part 1 --------------------------------------------------------------

const name = 'Matt'
let age = 33

age += 1

console.log('Part 1: ', age + '\n')

// Part 2 --------------------------------------------------------------

function add(num1, num2){
    return num1 + num2;
}

console.log('Part 2: ', add(2,3)  + '\n')

const hello = () => "this string comes from an Anonymous arrow function"

console.log("Part 2b: ", hello()  + '\n')

const isEven = (num) => num % 2 == 0 ? true : false

console.log("Part 2c: ", isEven(2) + '\n')

// Part 3 -------------------------------------------------------------

const animals = ['dog', 'cat', 'llama', 'bird']

console.log("Part 3:")
for (animal of animals){
    console.log(animal.toUpperCase())
}

const findCat = (e) => e === 'cat';
let catIndex = animals.findIndex(findCat)

animals.splice(catIndex, catIndex)

animals.push("opossum")

const poppedElement = animals.pop()

console.log("Part 3:b (removed element): " + poppedElement)
console.log("Part 3:c (new last element): " + animals[animals.length -1])
console.log("Part 3:d (new array): " + animals)



// Part 3 -------------------------------------------------------------

class Point {
    constructor(x, y, x2, y2){
        this.x = x
        this.y = y
        this.x2 = x2
        this.y2 = y2
    }

    distanceBetween(){

        let minusX = this.x - this.x2
        let minusY = this.y - this.y2

        minusX *= minusX 
        minusY *= minusY

        return Math.sqrt(minusX + minusY)
       
    }
}

let pointObject = new Point(5, 5, 10, 10)

console.log(pointObject.distanceBetween())