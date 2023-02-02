import React from 'react'
import Drink from './Drink'
import {Route, NavLink} from 'react-router-dom'

// fetches all created drinks for a shop from backend
// connected to shop id
// allows creating, editing and deleting drinks

const linkStyles = {
    display: "inline-block",
    width: "100px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "dimgray",
    textDecoration: "none",
    color: "white",
  };

function DrinkMenu({shopname, shopid, location, drinks}){

    //console.log(drinks)

    //iterate through drinks

    return(
        <div>
            <h4>{location}</h4>
            DRINKMENU
            {drinks.map(drink =>(
                <Drink
                key={drink.id}
                name={drink.name}
                id={drink.id}
                />
            ))}
            <NavLink
                to={`/shops/${shopid}/drinks/new`}
                exact
                style={linkStyles}
                activeStyle={{
                    background: "white",
                    color: "cadetblue",
                  }}
            >
                New Drink
            </NavLink>
        </div>
    )
}

export default DrinkMenu