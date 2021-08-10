'use strict'

// Import Node.js module - fs (file system)
const fs = require('fs')

// Function to read the products.csv file + encoding type (utf-8)
const data = fs.readFileSync('products.csv', 'UTF8')

// split data in rows
let products = data.split('\n')
products.shift()


console.log(products)
