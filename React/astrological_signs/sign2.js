import React, { useState } from "react"
import { getSign } from "horoscope"

const ASTRO_SIGNS = {
    Aries: "♈",
    Taurus: "♉",
    Gemini: "♊",
    Cancer: "♋",
    Leo: "♌",
    Virgo: "♍",
    Libra: "♎",
    Scorpio: "♏",
    Sagittarius: "♐",
    Capricorn: "♑",
    Aquarius: "♒",
    Pisces: "♓",
}

export const Sign = (props) => {
    const [day, setDay] = useState(new Date().getDate())
    const [month, setMonth] = useState(new Date().getMonth() + 1)

    const setValidDay = (day) => {
        try {
            getSign({ month, day }) && setDay(day)
        } catch {}
    }

    const setValidMonth = (month) => {
        try {
            getSign({ month, day }) && setMonth(month)
        } catch {}
    }

    return (
        <div>
            <div
                style={{
                    position: "relative",
                    width: "50px",
                    height: "1em",
                    display: "inline-block",
                }}
            >
                <sub
                    style={{
                        position: "absolute",
                        top: "-9px",
                        left: "10px",
                    }}
                >
                    day
                </sub>
                <input
                    style={{ width: "40px" }}
                    min="1"
                    max="31"
                    type="number"
                    value={day}
                    onChange={(e) => setValidDay(Number(e.target.value))}
                />
            </div>

            <div
                style={{
                    position: "relative",
                    width: "100px",
                    height: "1em",
                    display: "inline-block",
                }}
            >
                <sub
                    style={{
                        position: "absolute",
                        top: "-9px",
                        left: "6px",
                    }}
                >
                    month
                </sub>
                <input
                    style={{ width: "40px" }}
                    min="1"
                    max="12"
                    type="number"
                    value={month}
                    onChange={(e) => setValidMonth(Number(e.target.value))}
                />
            </div>

            <div
                style={{
                    padding: "20px",
                    fontSize: "50px",
                    fontWeight: "bold",
                    color: "purple",
                }}
            >
                {ASTRO_SIGNS[getSign({ month, day })]}
            </div>
        </div>
    )
}
