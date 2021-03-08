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
            <a style={{ width: "200px", margin: "0 auto" }} target="blank" href={"https://reactjs.org/docs/react-component.html"}>Link til dokumentation</a>
            <MyComponents Emoji={"😃"} />
            <MyComponents Emoji={"😍"} />
        </div>
    )
}
