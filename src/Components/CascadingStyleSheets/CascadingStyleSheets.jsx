import React from 'react'
import "./myStyle.css"
import style from "./myStyle.module.css"

export default function CascadingStyleSheets() {
    return (
        <div className="mainContainer">
            <h1>Cascading Style Sheets</h1>
            <h2>Normal Css Styling</h2>
            <div className="container">
                <div className="box1">
                    <h2>Lorem ipsum dolor sit amet.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                </div>
                <div className="box2">
                    <h2>Delectus sit facere veritatis quo!</h2>
                    <p>Aspernatur ratione enim eum libero reprehenderit, suscipit provident architecto labore?</p>
                </div>
                <div className="box3">
                    <h2>Quisquam deleniti eveniet fugiat id.</h2>
                    <p>Voluptatum repellendus ratione laudantium esse fugiat dignissimos nam, totam aut!</p>
                </div>
            </div>


            <h2>Module Styling</h2>
            <div className={style.container}>
                <div className={style.box1}>
                    <h2>Lorem ipsum dolor sit amet.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                </div>
                <div className={style.box2}>
                    <h2>Delectus sit facere veritatis quo!</h2>
                    <p>Aspernatur ratione enim eum libero reprehenderit, suscipit provident architecto labore?</p>
                </div>
                <div className={style.box3}>
                    <h2>Quisquam deleniti eveniet fugiat id.</h2>
                    <p>Voluptatum repellendus ratione laudantium esse fugiat dignissimos nam, totam aut!</p>
                </div>
            </div>

        </div>
    )
}
