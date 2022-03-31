const { speak, capitalize } = require("./hello-world.js");

const assert = require('assert');

const capitalized = "Test Case";
const lower = "test case";

assert.strictEqual(capitalized, capitalize(lower))