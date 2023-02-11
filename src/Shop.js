import React from 'react'
import Drink from './Drink.js'
import {Link, useParams} from 'react-router-dom'

function Shop({shops, onDeleteDrink}){

    const params=useParams()
    const shopInfo = shops.find(shop=> shop.id == params.id)

    // if shops.drinks doesnt exist, display some message

    const renderDrinks = (shopInfo.drinks.length === 0) ? 
    (<h4>This shop has no drinks yet! Add a new drink by clicking the link above.</h4>)
    :
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
        />))
    

    return(
        <div>
            <h2>{shopInfo.name}</h2>
            <h4>Address: {shopInfo.location}</h4>
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
            {renderDrinks}
            {/*
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
            ))*/}
            <Link to="/shops">
                Back to All Shops
            </Link>
        </div>
    )
}

export default Shop