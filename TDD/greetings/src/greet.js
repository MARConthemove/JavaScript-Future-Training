const expect = require('must')

const greet = (name) => {
    // empty or not a string
    if (typeof name !== 'string' || name.length === 0) {
        return 'Hello, my friend'
    }

    // only one name
    if (name.split(',').length === 1) return `Hello, ${name}`

    // two names -> array and controlling via indexes
    if (name.split(",").length === 2) {
        return `Hello ${name.split(",")[0].trim()} and ${name.split(",")[1].trim()}`
    }

    // more than two names, seperated by comma
    if (name.length >= 2) {
        let arrayNames = name.replace(/\s/g, '').split(',')
        let firstName = arrayNames[0]
        let middleNames = arrayNames.slice(1, arrayNames.length - 1)
        let lastName = arrayNames[arrayNames.length - 1]

        return `Hello ${firstName}, ${middleNames.join(', ')} and ${lastName}`
    }

    // capitalized
    if (isCapitalized(name)) return `HELLO ${name.toUpperCase()}`
}

const isCapitalized = (name) => {
    // creating an array from name
    const nameArray = name.split('')
    // checking if every letter is upperCase
    nameArray.every(letter => letter === letter.toUpperCase()) //-> true, false
}

module.exports = { greet }
