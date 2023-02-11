import React from 'react'
import {useParams} from 'react-router-dom'

function Drinks({shops, drinks}){

    const params=useParams()

    const renderDrinks = drinks.map(drink =>(
        //{const drinkShop = shops.find(shop=> shop.id === drink.shop_id)}
        <div>
            <h4>{drink.name}</h4>
            <p>{drink.description}</p>
            <p>Served at: {drink.shop_id}</p>
        </div>
    ))

    return (
        <div>
            <h3>All Drinks Available</h3>
            Visit the drink's shop page to edit or delete drinks!
            {renderDrinks}
        </div>
    )
}

export default Drinks