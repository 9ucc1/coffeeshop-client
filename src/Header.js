import React from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'

const linkStyles = {
    display: "inline-block",
    width: "100px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "black",
    textDecoration: "none",
    color: "white",
  };

function Header(){

    const Header = styled.header`
    background-color: tan;
    min-height: 10vh;
    display: flex;
    
    align-items: center;
    justify-content: center;
    font-size: calc(5px + 2vmin);
    width: 100%;
    position: fixed;
    text-align: center;
`;
const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: white;
    font-family: "Lucida Console", "Courier New", monospace;
`;

    return(
        <Header>
            <Title>Coffee Shop Diary</Title>
            <NavLink
                to="/"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "beige",
                    color: "black",
                  }}
            >
                Home
            </NavLink>
            <NavLink
                to="/shops"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "beige",
                    color: "black",
                  }}
            >
                Shops
            </NavLink>
            <NavLink
                to="/drinks"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "beige",
                    color: "black",
                  }}
            >
                All Drinks
            </NavLink>
        </Header>
    )
}

export default Header
