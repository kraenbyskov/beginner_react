import React, { useState } from 'react'

export default function UseStateHook() {
    const [state, setstate] = useState(0);
    return (
        <div>
            <h1>UseState Hook</h1>

            <button onClick={() => setstate(state + 1)}>✨Clicker✨</button>
            <p>{state}</p>
        </div>
    )
}
