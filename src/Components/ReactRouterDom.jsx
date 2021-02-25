import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const LinkStyle = {
    border: "2px solid rgba(255, 255, 255, 0.1)",
    width: "100px",
    margin: "4px auto"
}


export default function ReactRouterDom() {

    const HomeUrl = `/ReactRouterDom`

    return (
        <div>
            <h1>React Router Dom</h1>
            <Router>
                <Link style={LinkStyle} to={`${HomeUrl}/`}>Home</Link>
                <Link style={LinkStyle} to={`${HomeUrl}/about`}>About</Link>
                <Link style={LinkStyle} to={`${HomeUrl}/users`}>Users</Link>
                <Switch>
                    <Route path={`${HomeUrl}/about`}>
                        <About />
                    </Route>
                    <Route path={`${HomeUrl}/users`}>
                        <Users />
                    </Route>
                    <Route path={`${HomeUrl}/`}>
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}


function Home() {
    return (
        <>
            <h2>Home</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, id. Nobis rerum cupiditate obcaecati vero. Ipsum iste rem ad magni?</p>
        </>
    );
}

function About() {
    return (
        <>
            <h2>About</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste nihil repellendus minima nostrum, deleniti sed, veritatis consectetur maiores asperiores fuga et minus dolor accusamus officiis impedit mollitia aperiam quisquam sunt.</p>
        </>
    );
}

function Users() {
    return (
        <>
            <h2>Users</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet earum placeat, ad ratione ab id, possimus ipsam veniam, numquam minima voluptatibus distinctio nemo consectetur aut. Numquam, magni. Vel distinctio sapiente animi explicabo nostrum iure! Expedita quidem assumenda est neque asperiores.</p>
        </>
    );
}