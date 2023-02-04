import React from 'react'
import {Link} from 'react-router-dom'
import NewShop from './NewShop.js'

function Shops({shops}){

    const renderShops = Object.keys(shops).map(shopid =>(
        <li>
            <Link to={`/shops/${shopid}`}>{shops[shopid].name}</Link>
        </li>
    ))

    //add new shops form

    return(
        <div>
            {renderShops}
            <Link to="/shops/new">
                Add a New Shop
            </Link>
        </div>
    )
}

export default Shops