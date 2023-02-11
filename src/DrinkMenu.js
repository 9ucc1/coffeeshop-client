import React from 'react'
import Drink from './Drink.js'
import {Link, useParams} from 'react-router-dom'

function DrinkMenu({shops, onDeleteDrink}){

    const params=useParams()
    const shopInfo = shops.find(shop=> shop.id == params.id)

    // if shops.drinks doesnt exist, display some message

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
                price={drink.price}
                shopid={drink.shop_id}
                description={drink.description}
                onDeleteDrink={onDeleteDrink}
                />
            ))}
            <Link to="/shops">
                Back to All Shops
            </Link>
        </div>
    )
}

export default DrinkMenu