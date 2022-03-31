// Reece Adams - ADV JS - 3/29/22 - lab 1: Refresher - Version 2 //

function add(num1, num2) {
    return num1 + num2
}; 

const number = add(1, 5); // Calling function

console.log(number) // Printing the result

const hello = (num) => `Hello! The solution is ${ num }!`; // fat arrow syntax function

console.log(hello(number)); // Printing result using fat arrow syntax

const isEven = function (num) {
    let checkValue = num % 2;
    let result = (checkValue === 0 ? true : false);
    return result
};

console.log(isEven(number));