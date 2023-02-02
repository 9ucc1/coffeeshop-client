import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import ShopCard from './ShopCard'

// map through shops from backend
// for each shop, create a ShopCard

function Shops({shops}){

    /*const [shops, setShops] = useState([])

    // move this up to app.js
    useEffect(()=>{
        fetch("http://localhost:9292/shops")
        .then(response=>response.json())
        .then(response=>{
          setShops(response)
      })
    }, [])*/

    //console.log(shops)
    //console.log(shops.drinks)

    //fetch shops from localhost:9292
    //how to get info from nested object??

    //show shop info link here
    //just use Link
    return(
        <div>
            {shops.map(shop =>(
                <ShopCard
                key={shop.id}
                shopname={shop.name}
                id={shop.id}
                location={shop.location}
                drinks={shop.drinks}
                />
            ))}
        </div>
    )
}

export default Shops