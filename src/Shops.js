import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

function Shops({shops}){

    const Background = styled.div`
    background: white;
    padding: 1em;
    padding-top: 80px;
    text-align: center;
    column-count: 2;
    column-gap: 1em;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;
const Wrapper = styled.p`
    padding: 1em;
    background: white;
    border: solid;
    border-color: tan;
    width: 250px;
    height: 100px;
    font-family: "Lucida Console", "Courier New", monospace;
    text-align: right;
    column-count: 2;
`;

const FormButton = styled.p`
    padding: 0.5em;
    background: tan;
    width: 150px;
    height: 30px;
    font-family: "Lucida Console", "Courier New", monospace;
    margin-left: 40%;
`

const renderShops = shops.map(shop =>(
    <Wrapper>
        <img src={shop.image}></img>
        <Link to={`/shops/${shop.id}`}>{shop.name}</Link>
    </Wrapper>
))

    return(
        <>
        <Background>
            {renderShops}
        </Background>
        <FormButton>
        <Link to="/shops/new">
        CREATE NEW SHOP
        </Link>
        </FormButton>
        </>
    )
}

export default Shops