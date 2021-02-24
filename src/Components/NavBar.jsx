import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Nav = styled.nav`
width:100%;
height:auto;
min-height:60px;
display:inline-flex;
justify-content:space-evenly;
align-items:center;
background:lightsteelblue;

a {
    color:white;
    text-decoration:none;
    background:darkblue;
    padding:5px 10px;
    border-radius:5px;
    box-shadow:1px 1px 3px black;
    
    &:hover {
        box-shadow:1px 1px 1px black;
        
    }

}
`

export default function NavBar({ Routes }) {
    return (
        <Nav>
            {Routes && Routes.map((links, id) => (
                <Link key={id} to={links.path}>{links.name}</Link>
            )
            )}
        </Nav>
    )
}
