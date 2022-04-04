// Reece Adams - ADV JS - 3/29/22 - lab 3: Hello Node - Version 2 //

const {speak, capitalize} = require("./hello-world.js");
const assert = require('assert');

const name = "JEFF"
speak(capitalize(name))

assert.strictEqual(name, "Jeff");
assert.strictEqual(name, "JefF");