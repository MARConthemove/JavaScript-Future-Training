import React, { useState } from 'react'

export const PriceInput = props => {
    const [amount, setAmount] = useState(0)

    const changeValue = e => {
        if (Number(e.target.value) < 0) return
        setAmount(e.target.value)
    }

    return (
        <span>
            $
            <input
                type="number"
                value={amount}
                style={{ width: '50px', color: 'cornflowerblue' }}
                onChange={changeValue}
            />
        </span>
    )
}
