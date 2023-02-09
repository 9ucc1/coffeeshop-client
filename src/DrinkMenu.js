import React from 'react'
import Drink from './Drink.js'
import {Link, useParams} from 'react-router-dom'

function DrinkMenu({shops, onDeleteDrink}){

    const params=useParams()
    const shopInfo = shops.find(shop=> shop.id == params.id)
    //console.log("shopInfo:", shopInfo)

    return(
        <div>
            <h2>{shopInfo.name}</h2>
            <h4>{shopInfo.location}</h4>
            <p>{shopInfo.description}</p>
            <Link to={`/shops/${params.id}/newdrink`}>
                Add a New Drink
            </Link>
            <br/>
            <Link to={`/shops/${params.id}/edit`}>
                Edit Shop Info
            </Link>
            <br/>
            <h3>MENU</h3>
            {
            shopInfo.drinks.map(drink =>(
                <Drink
                drink={drink}
                key={drink.id}
                name={drink.name}
                id={drink.id}
                decaf={drink.decaf}
                ingredients={drink.ingredients}
                shopid={drink.shop_id}
                description={drink.description}
                onDeleteDrink={onDeleteDrink}
                />
            ))}
        </div>
    )
}

export default DrinkMenu