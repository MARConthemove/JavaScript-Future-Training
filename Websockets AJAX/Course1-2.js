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

