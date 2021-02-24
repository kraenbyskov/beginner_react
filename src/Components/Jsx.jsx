import React from 'react'
import { Container, Output, CodeViewe, Card } from '../MyStyledcomponents/MyStyledcomponents';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialOceanic } from 'react-syntax-highlighter/dist/esm/styles/prism';

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

    const codeString = `const elementWithoutJSX = React.createElement(
        "h3",
        { className: "greeting" },
        "Hello, 🌐!"
    )

    const elementWithJSX = (
        <h3 className="greeting">
            Hello, 🌐!
        </h3>
    );`;

    return (

        <Container>
            <CodeViewe>
                <Card style={{ width: "60%", background: "rgb(38, 50, 56)" }}>
                    <h3>Koden for at lave vores output</h3>
                    <SyntaxHighlighter language="jsx" style={materialOceanic}>
                        {codeString}
                    </SyntaxHighlighter>
                </Card>
            </CodeViewe>
            <Output>
                <Card>
                    <h1>JSX</h1>
                    <h3>Vores output</h3>
                    <p>Er ude Jsx</p>
                    {elementWithoutJSX}
                    <p>Er med Jsx</p>
                    {elementWithJSX}
                </Card>
            </Output>
        </Container>
    )
}
