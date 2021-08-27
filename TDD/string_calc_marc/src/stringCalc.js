'use strict'

const stringCalc = str => sum(str.split(',').map(Number).filter(n => n <= 1000))
const sum = (numbers) => numbers.reduce(add)
const add = (a, b) => a + b

module.exports = { stringCalc, sum }
