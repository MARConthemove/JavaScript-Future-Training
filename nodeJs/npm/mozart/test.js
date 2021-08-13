"use strict"

const shortNames = require("./shortNames.js").shortNames

console.log(shortNames(["Ladislaus Jones"]))
// => [ "L. Jones" ]

console.log(shortNames(["Ladislaus Jones", "Heribert Gold"]))
// => [ "L. Jones",  "H. Gold" ]

console.log(shortNames(["Wolfgang Amadeus Mozart"]))
// => [ "W. A. Mozart" ]
