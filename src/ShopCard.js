import React from 'react'
import { Route, NavLink } from 'react-router-dom'
import DrinkMenu from './DrinkMenu'

const linkStyles = {
    display: "inline-block",
    width: "100px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "dimgray",
    textDecoration: "none",
    color: "white",
  };

// starts with one under customer form on order page?
// can make multiples of these on order page?
// posts coffee drink to backend

// maybe just tagged with category?
// coffee, tea, juice ?

// can I have customer and drink form on same form ?
// posting to different tables...

// deploy: render, netlify, aws(big one)
// osi model

function ShopCard(){
    return (
        <div>individual shop, link to drinkmenu
        <Route path='/shops/:id'>
          <DrinkMenu/>
        </Route>
        <NavLink
                to="/shops/:id"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "white",
                    color: "cadetblue",
                  }}
            >
                View Menu
            </NavLink>
        </div>
    )
}

export default ShopCard