import React from 'react'
import {NavLink} from 'react-router-dom'

// app title above navbar links
// buttons/routes here
// new order, orders placed

const linkStyles = {
    display: "inline-block",
    width: "100px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "dimgray",
    textDecoration: "none",
    color: "white",
  };

function Header(){
    return(
        <div>
            <h3>Coffee Shop Explorer</h3>
            <NavLink
                to="/"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "white",
                    color: "cadetblue",
                  }}
            >
                Home
            </NavLink>
            <NavLink
                to="/shops"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "white",
                    color: "cadetblue",
                  }}
            >
                Browse Shops
            </NavLink>
        </div>
    )
}

export default Header
