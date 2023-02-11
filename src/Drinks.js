import React from 'react'

function Drinks({drinks}){

    const renderDrinks = drinks.map(drink =>(
        <li>
            <h4>{drink.name}</h4>
        </li>
    ))

    return (
        <div>
            {renderDrinks}
        </div>
    )
}

export default Drinks