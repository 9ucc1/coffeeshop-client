import React from 'react'
import Drink from './Drink.js'
import {Link, useParams} from 'react-router-dom'
import styled from 'styled-components'

function Shop({shops, onDeleteDrink}){

    const Background = styled.div`
    background: white;
    padding: 1em;
    padding-top: 80px;
    text-align: center;
    `;

    const Wrapper = styled.p`
    padding: 0.5em;
    background: white;
    border: solid;
    border-color: tan;
    text-align: center;
`;

    const params=useParams()
    const shopInfo = shops.find(shop=> shop.id == params.id)

    const renderDrinks = (shopInfo.drinks.length === 0) 
    ? 
    (<h4>This shop has no drinks yet! Add a new drink by clicking the link above.</h4>)
    :
    shopInfo.drinks.map(drink =>(
        <Wrapper>
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
        </Wrapper>
        ))
    

    return(
        <Background>
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
            <h3>{shopInfo.name}'s Drinks</h3>
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
        </Background>
    )
}

export default Shop