import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import { PriceInput } from "./PriceInput"
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

    return (
        <tr>
            <td>{props.count} &times;</td>
            <td>{props.name}</td>
            <td className="price">
                <PriceInput amount={price} onAmountChange={setPrice} />
            </td>
            <td>{props.count * price}</td>
        </tr>
    )
}

ReactDOM.render(<App />, document.querySelector("#app"))
