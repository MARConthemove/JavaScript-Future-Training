const fizzbuzz = n => {
    if (n % 3 === 0 && n % 5 === 0) {
        return 'fizzbuzz'
    } else if (n % 3 === 0 || n.toString().includes('3')) {
        return 'fizz'
    } else if (n % 5 === 0) {
        return 'buzz'
    } else if (n % 7 === 0) {
        return 'bazz'
    } else {
        return n
    }
}

module.exports = { fizzbuzz }
