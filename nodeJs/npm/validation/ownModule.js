'use strict'

// importing modules from loop.js!
const loop = require("./loopmodule@0.0.1/loop.js")

// this is what we want to do:
console.log(Math.floor(Math.random() * 6) + 1)
console.log(Math.floor(Math.random() * 6) + 1)
console.log(Math.floor(Math.random() * 6) + 1)
console.log(Math.floor(Math.random() * 6) + 1)
console.log(Math.floor(Math.random() * 6) + 1)

console.log(loop.times(5, () => Math.floor(Math.random() * 6) + 1))
console.log(loop.range(3, 7))
console.log(loop.range(7))
console.log(loop.range(3, 7, 2))
