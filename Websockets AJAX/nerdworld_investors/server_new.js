'use strict'

// initialization of web server

const ip = 127.0.0.1
const port = 8081

const fs = require('fs')
const express = require('express')
const app = express()

app.use(express.static('public'))

app.listen(port, ip, () => {
    console.log(`Server is running under: http://${ip}:${port}`)
})
