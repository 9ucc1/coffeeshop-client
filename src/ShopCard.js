import React, {useState, useEffect} from 'react'
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

function ShopCard({ name, location, id }){

  const [drinks, setDrinks] = useState([])

  useEffect(()=>{
    fetch('http://localhost:9292/drinks')
    .then(response=>response.json())
    .then(response=>setDrinks(response))
  })

    return (
        <div>individual shop, link to drinkmenu
          <h3>{name}</h3>
          <h3>{location}</h3>
          <h4></h4>
        <Route exact path={`/shops/${id}`}>
          <DrinkMenu
            drink={drinks}
          />
        </Route>
        <NavLink
                to={`/shops/${id}`}
                exact
                style={linkStyles}
                activeStyle={{
                    background: "white",
                    color: "cadetblue",
                  }}
            >
                Drink Menu
            </NavLink>
        </div>
    )
}

export default ShopCard