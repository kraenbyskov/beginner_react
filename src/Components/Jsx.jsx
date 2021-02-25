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
        <>
            <h1>JSX</h1>
            <h3>Vores output</h3>
            <p>Dette element er ude JSX</p>
            {elementWithoutJSX}
            <p>Hvor dette element er med JSX</p>
            {elementWithJSX}
        </>
    )
}


