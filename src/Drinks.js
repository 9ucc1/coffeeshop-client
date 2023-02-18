import React from 'react'
import {useParams, Link} from 'react-router-dom'
import styled from 'styled-components'

function Drinks({drinks}){

    const Background = styled.div`
    background: white;
    padding: 1em;
    padding-top: 80px;
    padding-bottom: 80px;
    text-align: center;
    `
    const Wrapper = styled.div`
    padding: 0.5em;
    background: white;
    width: 275px;
    border: solid;
    border-color: tan;
    text-align: left;
    `
    const Columns = styled.div`
    column-count: 2;
    column-gap: 1em;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    `

    const renderDrinks = drinks.map(drink =>(
        <div>
            <Wrapper>
            <img src={drink.image}></img>
            <h4>{drink.name}</h4>
            <p>{drink.description}</p>
            <Link to={`/shops/${drink.shop_id}`}>
                Visit this drink's shop
            </Link>
            </Wrapper>
        </div>
    ))

    return (
        <Background>
        <div>
            <h2>All Drinks Available</h2>
            Visit the drink's shop page to view full details, edit and delete drinks!
            <Columns>
            {renderDrinks}
            </Columns>
        </div>
        </Background>
    )
}

export default Drinks