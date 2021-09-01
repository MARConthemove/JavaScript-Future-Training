import React from "react"
import ReactDOM from "react-dom"
import { PriceInput } from "./PriceInput"

// work-around hot-reloading
if (module.hot) {
    module.hot.accept()
}

ReactDOM.render(<PriceInput />, document.querySelector("#app"))

