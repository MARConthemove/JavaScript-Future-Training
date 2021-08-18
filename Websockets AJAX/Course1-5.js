'use strict'

// In der Realität stellen viele JavaScript-Entwickler ihre Schnittstellen zu asynchronen Funktionen von Callbacks auf Promises umstellen.

// Aufruf mit Callback:

// doSomething(argument, (error, result) => {
//     if (error) {
//         console.log('KO')
//     } else {
//         console.log('OK: ' + result)
//     }
// })

// Promise Variante:

// doSomething(argument)
//     .then(result => console.log('OK' + result))
//     .catch('KO')

const fs = require('fs')

let getFileContent = name =>
    new Promise((resolve, reject) =>
        fs.readFile(name, 'UTF8', (error, content) => {
            if (error) {
                reject('could not read file')
            } else {
                resolve(content)
            }
        }),
    )

getFileContent("hello.txt")
    .then((content) => console.log(content))
    .catch((error) => console.log(error))

Promise.all([
    getFileContent("hello1.txt"),
    getFileContent("hello2.txt"),
    getFileContent("hello3.txt"),
    getFileContent("hello4.txt"),
    getFileContent("hello5.txt"),
    getFileContent("hello6.txt"),
])
    .then((contents) => contents.forEach((content) => console.log(content)))
    .catch((error) => console.log(error))
