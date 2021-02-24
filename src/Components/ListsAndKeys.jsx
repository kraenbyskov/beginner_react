import React from 'react'

export default function ListsAndKeys() {
    const Emoji = ["😄", "😃", "😳", "😜", "😴"];
    return (
        <div>
            <h1>Lists og Keys</h1>
            <p>Her Kigger den på vores array <strong>Emoji</strong> og for hver element i vores array laver den en <strong>li</strong> med vores emoji i.</p>
            <p>I et map skal der altid være en key derfor tilføjer man <strong>id</strong> til <strong>key</strong> i vores <strong>li</strong></p>
            {Emoji.map((emoji, id) => (
                <li key={id}>{emoji}</li>
            ))}
        </div>
    )
}
