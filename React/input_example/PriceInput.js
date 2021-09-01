import React, { useState } from "react"

export const PriceInput = props => {
    const [amount, setAmount] = useState(0)

    const changeValue = e => {
        console.log('new Value: ' + e.target.value)
        if (Number(e.target.value) < 0) return null
        setAmount(e.target.value)
    }

    return (
        <span>
            $
            <input
                type="number"
                value={amount}
                style={{ width: "100px", color: "red" }}
                onChange={changeValue}
            />
        </span>
    )
}
