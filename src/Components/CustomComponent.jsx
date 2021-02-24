import React from 'react'


const MyComponents = (props) => {
    const Emoji = props.Emoji;
    return (
        <h1>Hello {Emoji}</h1>
    )
}


export default function CustomComponent() {
    return (
        <div style={{ textAlign: "center" }}>
            <h1>😍Component😃</h1>
            <MyComponents Emoji={"😃"} />
            <MyComponents Emoji={"😍"} />
        </div>
    )
}
