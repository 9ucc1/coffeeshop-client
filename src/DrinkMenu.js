import React from 'react'
import Drink from './Drink'

// fetches all created drinks for a shop from backend
// connected to shop id
// allows creating, editing and deleting drinks

function DrinkMenu({drink}){
    return(
        <div>
            {console.log(drink)}
            DRINKMENU shop's drinks here
            map through drinks
            <Drink 
            />
        </div>
    )
}

export default DrinkMenu