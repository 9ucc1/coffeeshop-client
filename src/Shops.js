import React, {useState, useEffect} from 'react'
import ShopCard from './ShopCard'

// map through shops from backend
// for each shop, create a ShopCard

function Shops(){

    const [shops, setShops] = useState([])

    useEffect(()=>{
        fetch("http://localhost:9292/shops")
        .then(response=>response.json())
        .then(response=>{
          setShops(response)
      })
    })

    //fetch shops from localhost:9292
    return(
        <div>map through shops
            {shops.map(shop =>(
                shop.name
            ))}
            <ShopCard />
        </div>
    )
}

export default Shops