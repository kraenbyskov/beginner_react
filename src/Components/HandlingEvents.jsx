import React from 'react'

export default function HandlingEvents() {

    const minFunction = () => {
        console.log("🤪Du har trykket på mig🤪")

    }

    return (
        <div>
            <h1>Handling Events</h1>
            <p>Hver gang der bliver trykket på knappen logger den i consolen</p>
            <button onClick={() => minFunction()}>🤪Tryk på mig🤪</button>
        </div>
    )
}
