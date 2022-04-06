// Reece Adams - ADV JS - 3/29/22 - lab 3: Hello Node - Version 2 //

const {speak, capitalize} = require("./hello-world.js");
const assert = require('assert');

let name1 = "jeff"
let name2 = capitalize(name)

assert.strictEqual(name2, "Jeff");
assert.strictEqual(name2, "JefF");