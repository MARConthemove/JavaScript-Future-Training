import React, { useState } from 'react'
import { getSign, getZodiac } from "horoscope"

export const Sign = (props) => {
    const [day, setDay] = useState()
    const [month, setMonth] = useState()

    const setValidDay = (day) => {
        try {
            getSign({month, day}) && setDay(day)
        } catch (error) {
            console.log('konnte nichts finden: ' + error)
        }
    }

    const setValidMonth = (month) => {
        try {
            getSign({month, day}) && setMonth(month)
        } catch (error) {
            console.log('konnte keinen monat finden: ' + error)
        }
    }
}
