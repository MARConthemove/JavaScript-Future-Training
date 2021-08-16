"use strict"

const http = require("http")

const ip = "127.0.0.1"
const port = 8081

const server = http.createServer((request, response) => {
    // console.log(response)
    response.statusCode = 404
    response.setHeader("Content-Type", "text/plain")
    response.end("Hello World\n")

    // request "Event" -> see possibilities
    // console.log(request)
    console.log(request.headers['user-agent'])
})

server.listen(port, ip, () => {
    console.log(`Server running at http://${ip}:${port}/`)
})

