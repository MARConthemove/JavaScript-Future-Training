'use strict'

const IP = '127.0.0.1'
const PORT = 8081

const express = require('express')
const app = express()
app.use(express.static('public'))

const http = require('http')
const socketIo = require('socket.io')
const webServer = http.Server(app)
const io = socketIo(webServer)

// initialisierung von tododb
let tododb = require('./tododb.js')

tododb.add('buy coffee')
tododb.add('write a book about JavaScript')

// in diesem beispielt sollen alle verbundenen cleints ihr sicht aktualisieren, deswegen benutzt der server io.emit(...)

io.on('connection', socket => {
    socket.on('get', () => {
        console.log('get()')
        io.emit('push', tododb.get())
    })

    socket.on('add', text => {
        // even wird geloggt
        console.log('add(' + text + ')')
        // passende methode des tododb.js moduls wird aufgerufen (hier add())
        tododb.add(text)
        // ein push-event wird zu allen clients geschickt mit der aktualisierten to-do-liste
        io.emit('push', tododb.get())
    })

    socket.on('set', (ix, isDone) => {
        console.log('set(' + ix + ', ' + isDone + ')')
        tododb.set(ix, isDone)
        // sendet nachricht an alle verbundenen clients
        io.emit('push', tododb.get())
    })

    socket.on('clean', () => {
        console.log('clean()')
        tododb.clean()
        io.emit('push', tododb.get())
    })

    socket.on('dump', () => {
        console.log('dump()')
        tododb.dump()
        io.emit('push', tododb.get())
    })
})

webServer.listen(PORT, IP, () => {
    console.log(`Server running at http://${IP}:${PORT}/`)
})
