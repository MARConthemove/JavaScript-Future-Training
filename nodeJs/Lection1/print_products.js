'use strict'

// Import Node.js module - fs (file system)
const fs = require('fs')

// Function to read the products.csv file + encoding type (utf-8)
const data = fs.readFileSync('products.csv', 'UTF8')

// split data in rows
const products = data.split('\n')

// removing the headers
products.shift()

// function to modify the output
const recordToHTML = record => {
    const fields = record.split(',')
    let html = `
        <h1>${fields[0]}</h1>
        <p>${fields[1]}</p>
        <p>Price: EUR ${fields[3]}</p>`
    return html
}

const pages = products.filter(row => row !== '').map(recordToHTML)

pages.forEach(page => console.log(page))

console.log('ready')
