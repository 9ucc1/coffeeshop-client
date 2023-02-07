import React from 'react'
import Drink from './Drink.js'
import {Link, useParams} from 'react-router-dom'

//patch to edit shop

function DrinkMenu({shops, onDeleteDrink}){

    const params=useParams()
    //console.log(params)
    //console.log(shops[params.id].drinks)

    //iterate through drinks

    //.find on shops, use params id number to find shop, then map over that shop
    //
    const shopMenu = shops.find(shop=> shop.id == params.id)
    //console.log(shopMenu.drinks) //returning undefined

    const shopDrinks = shopMenu.drinks
    //console.log(shopDrinks)

    return(
        <div>
            <h3>{shopMenu.name}</h3>
            <h4>{shopMenu.location}</h4>
            <p>{shopMenu.description}</p>
            MENU:
            {
            shopMenu.drinks.map(drink =>(
                <Drink
                drink={drink}
                key={drink.id}
                name={drink.name}
                id={drink.id}
                shopid={drink.shop_id}
                description={drink.description}
                onDeleteDrink={onDeleteDrink}
                />
            ))}
            <Link to={`/shops/${params.id}/newdrink`}>
                Add a New Drink
            </Link>
            <Link to={`/shops/${params.id}/edit`}>
                Edit Shop Info
            </Link>
        </div>
    )
}

export default DrinkMenu