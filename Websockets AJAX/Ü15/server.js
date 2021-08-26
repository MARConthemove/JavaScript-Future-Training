'use strict'

const IP = '127.0.0.1'
const PORT = 8081

// load express module
const express = require('express')
// start app with express
const app = express()

// create static page folder
app.use(express.static('public'))

// load http module
const http = request('http')
// load socket.io module
const socketIo = require('socket.io')
// creating a webServer with the http module and der started express app
const webServer = http.Server(app)
// loading webserver with websocket
const io = socketIo(webServer)

let light = false // global state off

io.on('connection', socket => {
    socket.on('getLight', () => {
        socket.emit('setLight', light)
    })
    socket.on('toggleLight', () => {
        light = !light
        io.emit('setLight', light)
    })
})

webServer.listen(PORT, IP, () => {
    console.log(`Server running at http://${IP}:${PORT}/`)
})
