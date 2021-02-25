import React from 'react'
import { NavLink, useParams } from "react-router-dom";
import styled from 'styled-components';

const Nav = styled.nav`
min-height:100vh;
position:relative;
width:300px;
background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(30px);
  border-right: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 80px rgba(0, 0, 0, 0.2);
p {
    color:white;
}

`

const Content = styled.div`
padding:16px;

`

const Active = {
    backgroundColor: "#161e2e",
    background: "rgba(255, 255, 255, 0.2)",
    backdropFilter: " blur(30px)",
    border: "2px solid rgba(255, 255, 255, 0.1)",
    boxShadow: "0 0 80px rgba(0, 0, 0, 0.2)"
}

export default function NavBar({ Routes }) {
    return (
        <Nav>
            <Content>
                {/* <Content> */}
                <p>React Guide punkter</p>
                {Routes && Routes.map((links, id) => (
                    <NavLink key={id} exact={links.name === "Home" ? true : false} activeStyle={Active} to={links.path}><i style={{ paddingRight: "8px" }} className={links.icon} /> {links.name}</NavLink>
                )
                )}
                {/* </Content> */}
            </Content>
        </Nav>
    )
}
