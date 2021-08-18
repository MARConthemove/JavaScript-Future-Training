"use strict"

// print a phrase, a word at a time:
// the pyramid of doom appears

const words = 'the pyramid of doom appears'.split(' ')

const printWord = n => {
    console.log(words[n])
    n += 1
    if (n < words.length) {
        setTimeout(() => printWord(n), 1000)
    }
}

printWord(0)
