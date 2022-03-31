const { speak, capitalize } = require("./hello-world.js");

const assert = require('assert');

const capitalized = "Test";
const lower = "test";

assert.strictEqual(capitalized, capitalize(lower))