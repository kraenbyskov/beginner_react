import React from 'react'
import { NavLink, useParams } from "react-router-dom";
import styled from 'styled-components';

const Nav = styled.nav`
background:#252f3f;
padding:16px;
height:100vh;
position:relative;
width:300px;
p {
    color:white;
}
a {
    margin:4px 0;
    display:block;
    padding:12px 12px;
    text-decoration:none;
    border-radius:8px;
    color:white;
    transition:all 0.35s cubic-bezier(.35, 0,.1, 1);
    &:hover {
       background-color:#1a2336;
    }
}
`

// const Content = styled.div`
// position:fixed;
// width:auto;

// `


const Active = {
    backgroundColor: "#161e2e"
}

export default function NavBar({ Routes }) {
    return (
        <Nav>
            {/* <Content> */}
            <p>React Guide punkter</p>
            {Routes && Routes.map((links, id) => (
                <NavLink key={id} exact={links.name === "Home" ? true : false} activeStyle={Active} to={links.path}>{links.name}</NavLink>
            )
            )}
            {/* </Content> */}
        </Nav>
    )
}
