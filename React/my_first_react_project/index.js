// import ist ähnlich wie require(node.js)
// einbinden von bibliotheken
// import von react und react-dom
import React from "react"
import ReactDOM from "react-dom"

// work-arround hot-reloading
if (module.hot) {
    module.hot.accept()
}

// react bietet möglichkeit eigene html elemente anzulegen
// wann immer das tag <HelloMessage/> in react-app verwendet wird, ersetz react das tag durch <h2>hello world!</h2>

// um den Einsprungspunkt (engl. Mountpoint) zu definieren: -> <div id="app" />

// React-Komponente:
const HelloMessage = () => <h2>Hello World!</h2>

// Für diesen Node benötigt man 2 Paramter:
// 1: React-Komponente
// 2: DOM querySelector -> React node
ReactDOM.render(<HelloMessage />, document.querySelector("#app"))
