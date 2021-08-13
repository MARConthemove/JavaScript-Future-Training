'use strict'

String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1)
}

exports.shortNames = name => {
    let tokens = name.trim().split(/\s+/)
    let last = tokens.pop()
    return tokens.map(str => str.charAt(0).toUpperCase() + '.').join(' ') + last.capitalize()
}


