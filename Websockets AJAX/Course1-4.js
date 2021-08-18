'use strict'

// Die Promise-API stellt noch die Methode Promise.all() zur Verfügung.
// Diese Funktion erhält als Paramter ein Array von Promises und gibt ein Promise zurück.
// Dieses Promise ist erfüllt, sobald ALLE anderen Eingangs-Promises erfüllt sind, oder wird verworfen, sobald das ERSTE Eingangs-Promise verworfen wurde.

// Nach 1 Sekunde werden alle 6 Strings sofort ausgegeben

const printDelay = (time, str) =>
    new Promise(resolve =>
        setTimeout(() => {
            console.log(str)
            resolve()
        }, time),
    )

// Promise.all([
//     printDelay(1000, 'The'),
//     printDelay(1000, 'pyramid'),
//     printDelay(1000, 'of'),
//     printDelay(1000, 'doom'),
//     printDelay(1000, 'is'),
//     printDelay(1000, 'defeated.'),
// ]).then(() => console.log('OK'))

console.log('Neuer Fall:\n')

// Promise.all([
//     printDelay(1000, "The"),
//     printDelay(1000, "pyramid"),
//     printDelay(1000, "of"),
//     new Promise((resolve, reject) => reject()),
//     printDelay(1000, "doom"),
//     printDelay(1000, "is"),
//     printDelay(1000, "defeated."),
// ])
//     .then(() => console.log('OK'))
//     .catch(() => console.log('KO'))

Promise.all([
    new Promise((resolve, reject) => resolve('one')),
    new Promise((resolve, reject) => setTimeout(() => resolve('two'), 500)),
    new Promise((resolve, reject) => resolve('three')),
]).then(results => results.forEach(result => console.log(result)))
// => one↲ two↲ three↲
