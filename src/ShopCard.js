import React, {useState, useEffect} from 'react'
import { Route, Link } from 'react-router-dom'
import DrinkMenu from './DrinkMenu'
import NewDrink from './NewDrink'

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

function ShopCard({ shopname, location, id, drinks }){

    return (
        <div>
          <h3>{shopname}</h3>
        <Link
          to={`/shops/${id}`}
          exact
          style={linkStyles}
          activeStyle={{
              background: "white",
              color: "cadetblue",
          }}
        >
          Shop Page
        </Link>
        </div>
    )
}

export default ShopCard