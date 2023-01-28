import React from 'react'
import Drink from './Drink'

// fetches all created drinks for a shop from backend
// connected to shop id
// allows creating, editing and deleting drinks

function DrinkMenu(){
    return(
        <div>
            DRINKMENU shop's drinks here
            map through drinks
            <Drink />
        </div>
    )
}

export default DrinkMenu