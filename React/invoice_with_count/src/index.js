import React, { useState } from "react"
import ReactDOM from "react-dom"

import { PriceInput } from "./PriceInput"
import { CountInput } from "./CountInput"
import invoiceItems from "./invoice_items"

const App = () => (
    <div>
        <h1>Invoice</h1>
        <Invoice items={invoiceItems} />
    </div>
)

const Invoice = (props) => (
    <table className="invoice">
        <thead>
            <tr>
                <th>Count</th>
                <th>Name</th>
                <th>Price</th>
                <th>Total</th>
            </tr>
        </thead>
        <tbody>
            {props.items.map((item) => (
                <InvoiceItem {...item} key={item.name} />
            ))}
        </tbody>
    </table>
)

const InvoiceItem = (props) => {
    const [price, setPrice] = useState(props.price)
    const [count, setCount] = useState(props.count)
    const [name, setName] = useState(props.name)

    return (
        <tr>
            <td>
                <CountInput amount={count} setAmount={setCount} />
            </td>
            <td>{name}</td>
            <td className="price">
                <PriceInput amount={price} onAmountChange={setPrice} />
            </td>
            <td>{count * price}</td>
        </tr>
    )
}

ReactDOM.render(<App />, document.querySelector("#app"))
