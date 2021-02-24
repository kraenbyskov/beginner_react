import React from 'react'


export default function Jsx() {
    const elementWithoutJSX = React.createElement(
        "h3",
        { className: "greeting" },
        "Hello, 🌐!"
    )

    const elementWithJSX = (
        <h3 className="greeting">
            Hello, 🌐!
        </h3>
    );

    return (
        <div style={{ textAlign: "center" }}>
            <h1>JSX</h1>
            <h2>Begge elementer er ens</h2>
            <p>Er ude Jsx</p>
            {elementWithoutJSX}
            <p>Er med Jsx</p>
            {elementWithJSX}
        </div>
    )
}
