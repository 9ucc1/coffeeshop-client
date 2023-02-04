import React, { useState, useEffect } from 'react'
import { Route, Switch, useParams } from 'react-router-dom'
import Header from './Header.js' 
import Homepage from './Homepage.js'
import Shops from './Shops.js'
import NewDrink from './NewDrink.js'
import DrinkMenu from './DrinkMenu.js'

// deploy: render, netlify, aws(big one)
// osi model

function App() {

  const [shops, setShops] = useState([])

  const params = useParams()

  useEffect(()=>{
      fetch("http://localhost:9292/shops")
      .then(response=>response.json())
      .then(response=>{
        setShops(response)
    })
  }, [shops])
  //????? is this okay?

  function handleDeleteDrink(deletedDrink){
    console.log('app delete drink function start')
    //    const updatedSongs = songs.filter((song)=> song.id !== deletedSong.id)
    //    setSongs(updatedSongs)
    //const updatedDrinks = {...shops, drinks: [...shops.drinks, new?]}
    // shops[params.id].drinks.map
    
    //?????
    //console.log(shops[deletedDrink.shop_id].drinks)
    //shops with the id of deleted drink shop id
    const shopWithDelete = shops.filter((shop) => shop.id === deletedDrink.shop_id)
    //console.log(shopWithDelete[0].drinks)
    const updatedDrinks = shopWithDelete[0].drinks.filter((drink)=> drink.id !== deletedDrink.id)
    console.log(updatedDrinks)
    setShops({...shops, shopWithDelete: updatedDrinks})
  }

  return(
    <>
      <Header />
      <Switch>
        <Route path='/shops/:id/newdrink'>
          <NewDrink
          shops={shops} 
          />
        </Route>
        <Route path='/shops/:id'>
          <DrinkMenu
          shops={shops}
          onDeleteDrink={handleDeleteDrink}
          />
        </Route>
        <Route path='/shops'>
          <Shops 
          shops={shops}
          />
        </Route>
        <Route path='/'>
          <Homepage/>
        </Route>
      </Switch>
    </>
  )
}

//[...widgets, newWidget]
//{...category, name: "newname"}
//{...category, widgets: [...category.widgets, newWidget]}
//copy object with spread operator
export default App;