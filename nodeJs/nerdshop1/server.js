'use strict'

const fs = require('fs')
const express = require('express')
const app = express()

const ip = '127.0.0.1'
const port = 8081

// search in public folder
app.use(express.static('public'))

fs.readFile('products.csv', 'UTF8', (error, data) => {
    let products = data.split('\n')
    products.shift()

    // map sends every element as an argument to the recordToHTML function
    // pages builds array of every row with HTML
    let pages = products.filter(row => row !== '').map(recordToHTML)

    // res.send -> response -> output in html page
    app.get('/product', (req, res) => {
        res.send(pages[req.query.ix])
    })

    // for routes send information via formular to the server
    // app.post(....)

    app.get('/book/:title', (req, res) => {
        res.send(req.params.title)
        console.log(req.params.title)
    })

    // server listens to requests
    // func only to show user the server is running now!
    app.listen(port, ip, () => {
        console.log(`Server running at http://${ip}:${port}/`)
    })
})

// record -> string (row) from pages array
// smartphone case with built-in screen,never miss a message,20,39.90 (for ex)
const recordToHTML = record => {
    const fields = record.split(',')

    let html = `
        <h1>${fields[0]}</h1>
        <p>${fields[1]}</p>
        <p>Price: EUR ${fields[3]}</p>`

    if (Number(fields[2]) <= 5) {
        html += `<p>Last items in stock!</p>`
    }

    // .map() -> return value
    return html
}
