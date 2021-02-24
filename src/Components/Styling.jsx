import React from 'react'


const customStyling = {
    background: "blue", width: "200px", height: "200px", display: " inline-flex",
    justifyContent: "center",
    alignItems: "center"
}

const Container = {
    display: " inline-flex",
    justifyContent: "space-between",
    width: "300px",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)"
}

export default function Styling() {
    return (
        <div style={Container}>
            <div style={{
                background: "orange", width: "200px", height: "200px", display: " inline-flex", justifyContent: "center",
                alignItems: "center"
            }}><p>Noget Tekst her</p></div>
            <div style={customStyling}><p>Noget Tekst her</p></div>

        </div>
    )
}
