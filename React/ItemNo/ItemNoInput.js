import React, { useState, useRef, useEffect } from "react"

export const ItemNoInput = (props) => {
    const [itemNo, setItemNo] = useState("b123")
    const [editMode, setEditMode] = useState(false)
    const inputEl = useRef(null)
    useEffect(() => {
        inputEl.current && inputEl.current.focus()
    })

    const changeValue = (e) => {
        const currentValue = e.target.value
        if (
            currentValue.length > 0 &&
            !currentValue.match(/^[a-dA-D][0-9]{0,3}$/)
        )
            return
        setItemNo(currentValue)
    }

    const checkValue = (v) => v.match(/^[a-dA-D][0-9]{3}$/)

    const displayValue = (v) =>
        itemNo && `${itemNo[0].toUpperCase()}-${itemNo.slice(1)}`

    const acceptNewValue = () => {
        checkValue(itemNo) && setEditMode(false)
    }

    const enterInput = () => setEditMode(true)

    return (
        <span>
            {editMode ? (
                <input
                    ref={inputEl}
                    style={{ width: "40px" }}
                    value={itemNo}
                    onChange={changeValue}
                    onBlur={acceptNewValue}
                    onKeyPress={(e) => e.key === "Enter" && acceptNewValue()}
                />
            ) : (
                <span onClick={enterInput}>{displayValue()}</span>
            )}
        </span>
    )
}
