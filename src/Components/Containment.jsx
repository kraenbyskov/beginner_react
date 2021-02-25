import React from 'react'


const Container = (props) => {
    return (
        <div
            style={{
                backgroundColor: props.background,
                padding: "20px",
                margin: "20px auto",
                borderRadius: "16px",
                width: "50%",
            }}
        >
            {props.children}
        </div>
    );
};

export default function Containment() {
    return (
        <div>
            <h1>Containment</h1>
            <Container background={"#0092f5"}>
                <h1>Hello world</h1>
                <p>Lorem ipsum dolor sit amet consectetur</p>
            </Container>
        </div>
    )
}
