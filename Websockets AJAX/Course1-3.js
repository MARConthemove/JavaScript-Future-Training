'use strict'

// Zweck von resolve() -> Ergebnis abliefern
// Zweck von reject() -> Grund nennen warum Ergebnis nicht abgeliefert werden kann

const tryWork = (resolve, reject) => {
    let ergebnis = 21 * 3
    if (Math.random() < 0.5) {
        resolve(ergebnis)
    } else {
        reject('nope')
    }
}

const p4 = new Promise(tryWork)

// zum benutzen von p4 Promise:

p4.then(
    result => console.log('OK: ' + result),
    reason => console.log('KO: ' + reason),
)

// new Promise(tryWork)
//     .then(() => new Promise(tryWork))
//     .then(() => new Promise(tryWork))
//     .then(
//         (result) => console.log("OK: " + result),
//         (reason) => console.log("KO: " + reason),
//     )

// catch() ist equivalent zu then() mit nur dem zweiten Argument.

new Promise(tryWork)
    .then(() => new Promise(tryWork))
    .then(() => new Promise(tryWork))
    .then(result => console.log('OK: ' + result))
    .catch(reason => console.log('KO: ' + reason))
    .finally(() => console.log('Programm beendet'))

// gute Programme sollten Fehler auffangen. Falls kein reject() erstellt wird gibt es seit Node.js 6.6 folgenden Fehler in der Console:

// (node:2619) UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 2): nope
// (node:2619) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.

// was ist das Argument von reject()? -> Man kann einen String schreiben, allerdings gibt es in JavaScript ein eigenes Objekt hierfür: das Error Object.

new Promise(tryWork)
    .then(() => new Promise(tryWork))
    .then(() => new Promise(tryWork))
    .then((result) => console.log("OK: " + result))
    .catch(err => {
        // error message
        console.log('KO: ' + err.message)
        // error stack trace
        console.log(err.stack)
    })

// Dies würde zb. so aussehen:

// KO: nope
// Error: nope
//     at tryWork (/Users/chris/01/examples/stack_trace.js:8:16)
//     at new Promise (<anonymous>)
//     at Object.<anonymous> (/Users/chris/01/examples/stack_trace.js:12:1)
//     at Module._compile (module.js:643:30)
//     at Object.Module._extensions..js (module.js:654:10)
//     at Module.load (module.js:556:32)
//     at tryModuleLoad (module.js:499:12)
//     at Function.Module._load (module.js:491:3)
//     at Function.Module.runMain (module.js:684:10)
//     at startup (bootstrap_node.js:187:16)

// Stack Traces sind eine der wichtigesten Debug Hilfen!
