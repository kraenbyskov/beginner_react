import React, { useState } from 'react'

export default function Forms() {
    const [state, setstate] = useState();
    return (
        <div>
            <h2>Forms</h2>
            <p>Input Felt</p>
            <input
                onChange={(e) => setstate(e.target.value)}
                type="text"
                value={state}
            />
            <input
                onChange={(e) => setstate(e.target.value)}
                type="text"
                value={state}
            />
            <input
                onChange={(e) => setstate(e.target.value)}
                type="text"
                value={state}
            />
            <input
                onChange={(e) => setstate(e.target.value)}
                type="text"
                value={state}
            />
            <p>{state}</p>
        </div>
    )
}
