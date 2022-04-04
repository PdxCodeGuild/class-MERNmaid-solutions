// Part One

const name = 'christian'
let age = 29
age = 29 + 1
console.log(age)

// Part Two

function add(num1, num2){
    return num1 + num2
}
const number = add(5,5)
console.log(number)

const hello = () => {
    return "message"

}
console.log(hello());

const isEven = (...nums) => {
    for (num of nums) {
        if(num % 2 == 0) {
         return "True"
        }
        else {
         return "False"
        }
    }
};
console.log(isEven(1))

// Part Three

const animals = ['dog', 'cat', 'llama', 'bird']

for (animal of animals) {
    console.log(animal.toUpperCase());
    
}

const remove = animals.indexOf('cat');
if (remove > -1) {
    animals.splice(remove, 1);
}
console.log(animals)

animals.push('opossum')
console.log(animals)

animals.pop()
console.log(animals)

// Part Four

class Point {
     constructor(x, y) {   //constructors create new objects and set values of the class
        this.x = x
        this.y = y
    }
    distanceBetween(point) {
        const x = this.x - point.x;
        const y = this.y - point.y;

        return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));  //Math.pow returns base to the exponent power

    }
    
}
const pointOne = new Point(5, 6)
const pointTwo = new Point(7, 8)


console.log(pointOne.distanceBetween(pointTwo))
