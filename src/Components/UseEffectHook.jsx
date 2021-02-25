import React, { useEffect, useState } from 'react'

export default function UseEffectHook() {
    const [Email, SetEmail] = useState();
    const [Password, SetPassword] = useState();

    useEffect(() => {
        console.log("Jeg Render kun når man indstander i Email")
    }, [Email])

    return (
        <div>
            <h2>UseEffect Hook</h2>
            <label htmlFor="Email">Email : </label>
            <input
                onChange={(e) => SetEmail(e.target.value)}
                type="text"
                name="Email"
                value={Email}
            />
            <label htmlFor="Password">Password : </label>
            <input
                onChange={(e) => SetPassword(e.target.value)}
                type="text"
                name="Password"
                value={Password}
            />
            <h3>Dit Email output er</h3>
            <p>{Email}</p>
            <h3>Dit Password output er</h3>
            <p>{Password}</p>
        </div>
    )
}
