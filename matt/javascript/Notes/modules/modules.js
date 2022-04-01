const greeting = "Hello World";
const fs = require("fs");

const add = (num1, num2) => {
    return num1 + num2;
}

findX();

console.log(fs.readFileSync())

module.exports = {
    greeting,
    add,
    // or you can do longhand below
    // greeting: greeting,
}