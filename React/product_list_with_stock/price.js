import React from 'react'

const vat = (vatPercent, value) => (value * vatPercent) / 100

const grossPrice = (vatPercent, value) => vat(vatPercent, value) + value

export const Price = props => {
    return (
        <span>
            ${grossPrice(props.vat, props.value)}&nbsp; (incl. ${
                vat(props.vat, props.value)
            })
        </span>
    )
}
