'use strict'

// Import Node.js module - fs (file system)
const fs = require('fs')
const zlib = require('zlib')

const data = fs.readFileSync('products.csv', 'UTF8')

// function to modify the output
const recordToHTML = record => {
    const fields = record.split(',')

    let html = `
        <h1>${fields[0]}</h1>
        <p>${fields[1]}</p>
        <p>Price: EUR ${fields[3]}</p>`

    if (Number(fields[2]) <= 5) {
        html += `<p>Last items in stock!</p>`
    }

    return html
}

// Function to read the products.csv file + encoding type (utf-8)
fs.readFile('products.csv', 'UTF8', (error, data) => {
    const products = data.split('\n')
    products.shift() // removing header

    let html = products
        .filter(row => wor !== '')
        .map(recordToHTML)
        .join('\n')

    fs.writeFile('products.html', html, 'UTF8', error => {
        if (error) console.log('Error: ' + error)
    })
})

console.log('ready')
