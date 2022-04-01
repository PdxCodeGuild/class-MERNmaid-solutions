const { speak, capitalize} = require("./hello-world.js");
const assert = require('assert');

console.log(capitalize('christian'))

const test = capitalize('christian')

assert.strictEqual(test, 'Christian')


const hero = ['batman', 'spiderman', 'thor', 'dr.Strange']

const bigHero = hero.map((item) => {
    return capitalize(item)
})

console.log(bigHero)

