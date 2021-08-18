'use strict'

// der Funktion doWork werden 2 Argumente übergeben (resolve, reject). Diese sind wiederum selbst Funktionen!

// Ein neu erzeugtes Promise, welches bisher weder resolve() noch reject() aufgerufen hat, ist im Zustand PENDING.
// Hat der Handler resolve() aufgerufen - und damit die erfolgreiche Abarbeitung der Operation mitgeteilt, ist das Promise im Zustand ERFÜLLT.
// Falls reject() aufgerufen wurde - ist der Promise Zustand verworfen, REJECTED

// Der Trick dabei ist: new Promise() blockiert NIE! Auch nicht wenn doWork() erst später z.B. in einem Callback entscheidet reject() oder resolve() aufzurufen.

// Promise Event ist sozusagen ein Versprechen, ein Ergebnis künftig noch nachzuliefern!
const doWork = (resolve, reject) => {
    let ergebnis = 21 * 3
    resolve(ergebnis)
}

// new Promise erstellt ein Promise Objekt p1 mit dem Argument doWork()
const p1 = new Promise(doWork)

// Um das Ergebnis zu bekommen (von p1), benötigt man die Promise-API Methode then()..
p1.then(
    // resolve() Funktion
    result => console.log('OK: ' + result),
    // reject() Funktion
    reason => console.log('KO: ' + reason),
)

const p2 = new Promise(resolve => setTimeout(() => resolve(42), 1000))

p2.then(result => console.log(result))

// then() wird im Handler immer ASYNCHRON aufgerufen! Selbst wenn das Promise unmittelbar erfüllt wird.

const p3 = new Promise(resolve => resolve(42))
console.log('Step 1')
p3.then(result => console.log('OK: ' + result))
console.log('Step 2')

// Die Methode then() gibt stets ein neues Promise zurück, das aus dem Rückgabewert des then() Handlers erzeugt wird. DerRückgabewert kann explizit ein Promise sein oder auch ein Wert jedes anderen Typs, der dann einfach implizit in ein Promise verpackt und resolve() übergeben wird.

// -> then() Ketten sind möglich (chaining). Der Reihe nach werden asynchrone Aufgaben erledigt.

const wait = () => new Promise(resolve => setTimeout(resolve, 1000))

wait()
    .then(() => {
        console.log('The')
        return wait()
    })
    .then(() => {
        console.log('pyramid')
    })

// printDelay() soll ein Promise liefern, das den gegebenen Text verzögert ausgibt.

// print a phrase, a word at a time:
// use promises to avoid the pyramid of doom!

const printDelay = (time, str) =>
    new Promise(resolve =>
        setTimeout(() => {
            console.log(str)
            resolve()
        }, time),
    )

printDelay(1000, 'The')
        .then(() => printDelay(1000, 'pyramid'))
        .then(() => printDelay(1000, 'of'))
        .then(() => printDelay(1000, 'doom'))
        .then(() => printDelay(1000, 'is'))
        .then(() => printDelay(1000, 'defeated'))
