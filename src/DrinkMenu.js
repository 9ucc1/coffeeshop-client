import React from 'react'
import Drink from './Drink.js'
import {Route, Link, useParams} from 'react-router-dom'

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

  /*
              <NavLink
                to={`/shops/${params.id}/drinks/new`}
                exact
                style={linkStyles}
                activeStyle={{
                    background: "white",
                    color: "cadetblue",
                  }}
            >
                New Drink
            </NavLink>
  */

//function DrinkMenu({shopname, shopid, location, drinks}){
function DrinkMenu({shops}){

    const params=useParams()
    //console.log(params)
    //console.log(shops[params.id].drinks)

    //iterate through drinks

    return(
        <div>
            <h3>{shops[params.id].name}</h3>
            <h4>{shops[params.id].location}</h4>
            DRINKMENU
            {shops[params.id].drinks.map(drink =>(
                <Drink
                key={drink.id}
                name={drink.name}
                id={drink.id}
                />
            ))}
            <Link to={`/shops/${params.id}/newdrink`}>
                New Drink Form
            </Link>
        </div>
    )
}

export default DrinkMenu