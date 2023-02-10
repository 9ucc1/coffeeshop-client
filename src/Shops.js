import React from 'react'
import {Link} from 'react-router-dom'

function Shops({shops}){

    const renderShops = shops.map(shop =>(
        <li>
            <Link to={`/shops/${shop.id}`}>{shop.name}</Link>
        </li>
    ))

    //add new shops form

    return(
        <div>
            {renderShops}
            <br></br>
            <Link to="/shops/new">
                CREATE NEW SHOP
            </Link>
        </div>
    )
}

export default Shops