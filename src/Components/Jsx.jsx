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
            <h1>Introduktion til JSX</h1>
            <p>
                Det kaldes JSX, og det er en syntaksudvidelse til JavaScript. Vi anbefaler at bruge det med React til at beskrive, hvordan brugergrænsefladen skal se ud. JSX kan minde dig om et skabelonsprog, men det kommer med den fulde kraft af JavaScript.</p>
            <a style={{ width: "200px", margin: "0 auto" }} target="blank" href={"https://reactjs.org/docs/introducing-jsx.html"}>Link til dokumentation</a>
            <h3>Vores output</h3>
            <p>Dette element er ude JSX</p>
            {elementWithoutJSX}
            <p>Hvor dette element er med JSX</p>
            {elementWithJSX}
        </>
    )
}


