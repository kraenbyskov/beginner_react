import React, { useState } from 'react'

export default function ConditionalRendering() {
    const [state, setstate] = useState(false);
    return (
        <div>
            <h1>Conditional Rendering</h1>
            <div>
                <button onClick={() => setstate(!state)}>Skift hjerte</button>
                <p>State er lige nu <strong>{state.toString()}</strong></p>
                <p>her kigger den på om State er True eller False hvis den er True bliver hjertet grønt hvis den er false bliver det lilla</p>
                {state ? <div>💚</div> : <div>💜</div>}
                <p>her kigger den på om State er True hvis den er true displayer den hjertet hvis den ikke er displayer den ingenting</p>
                {state && <div>💚</div>}
            </div>
        </div>
    )
}
