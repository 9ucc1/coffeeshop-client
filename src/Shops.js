import React from 'react'
import {Link} from 'react-router-dom'

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
        </div>
    )
}

export default Shops