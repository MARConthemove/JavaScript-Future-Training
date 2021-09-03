import React, { useState } from "react"

// props = properties (eigenschaften von der jeweiligen React Komponente (function()))
export const CountInput = props => {
    // getter und setter -> zum besseren verändern der Werte (Objektorientierte Programmierung!)
    const [amount, setAmount] = useState(props.amount || 1)

    return (
        <span>
            <button
                onClick={() => setAmount(amount - 1)}
                disabled={amount <= 1}
            >
                -
            </button>
            <span style={{ width: "30px", color: "cornflowerblue" }}>
                &nbsp;{amount} &times;&nbsp;
            </span>
            <button
                onClick={() => setAmount(Number(amount) + 1)}
                disabled={amount >= 9}
            >
                +
            </button>
        </span>
    )
}
