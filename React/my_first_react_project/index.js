// import ist ähnlich wie require(node.js)
// einbinden von bibliotheken
// import von react und react-dom
import React from "react"
import ReactDOM from "react-dom"
import invoiceItems from "./invoice_items"

// work-arround hot-reloading
if (module.hot) {
    module.hot.accept()
}

// react bietet möglichkeit eigene html elemente anzulegen
// wann immer das tag <HelloMessage/> in react-app verwendet wird, ersetz react das tag durch <h2>hello world!</h2>

// um den Einsprungspunkt (engl. Mountpoint) zu definieren: -> <div id="app" />

// React-Komponente:
const App = () => (
    <div>
        <h2>Invoice</h2>
        <table className="invoice">
            <thead>
                <tr>
                    <th>Count</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Total</th>
                </tr>
            </thead>
        </table>

        <ul className="invoice_items">
            {invoiceItems.map((item) => (
                <li key={item.name}>
                    <InvoiceItem {...item}

                    />
                </li>
            ))}
        </ul>
    </div>
)

const InvoiceItem = (props) => (
    <h3>
        {props.count} &times; {props.name}:
        <span className="price"> ${props.price}</span>
    </h3>
)


const Product = props => (
    <div>
        <h3>{props.name}</h3>
        {props.children}
    </div>
)
// Für diesen Node benötigt man 2 Paramter:
// 1: React-Komponente
// 2: DOM querySelector -> React node
ReactDOM.render(<App />, document.querySelector("#app"))


