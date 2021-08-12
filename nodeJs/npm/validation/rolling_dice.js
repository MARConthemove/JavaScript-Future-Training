'use strict'


// recursive solution:
// const roll = (n) => {
//     if (n > 0) {
//         console.log(Math.floor(Math.random() * 6) + 1)
//         roll(n - 1)
//     }
// }
// roll(5)


// iterative solution:

// const roll = (n) => {
//     for (let i = 0; i < n; i += 1) {
//         console.log(Math.floor(Math.random() * 6) + 1)
//     }
// }
// roll(5)


// for for a better performance to outsource the function:

const times = (n, fn) => {
    for (let i = 0; i < n; i += 1) {
        fn()
    }
}

times(5, () => {
    console.log(Math.floor(Math.random() * 6) + 1)
})
