import React, { useState, useEffect } from 'react'
import { Route, Switch, useParams } from 'react-router-dom'
import Header from './Header.js' 
import Homepage from './Homepage.js'
import Shops from './Shops.js'
import NewDrink from './NewDrink.js'
import DrinkMenu from './DrinkMenu.js'
import NewShop from './NewShop.js'
import EditShop from './EditShop.js'

// deploy: render, netlify, aws(big one)
// osi model

// stretch: display all drinks page

function App() {

  const [shops, setShops] = useState([])

  const params = useParams()

  useEffect(()=>{
      fetch("http://localhost:9292/shops")
      .then(response=>response.json())
      .then(response=>{
        setShops(response)
    })
  }, [])
  //dependency array?
  //????? is this okay?

  function handleAddShop(newShop){ //this is not receiving my drinks array
    console.log("app add shop", newShop)
    setShops([...shops, newShop])
    console.log(shops)
  }

  function handleAddDrink(newDrink){
    //console.log("app add drink")
    const shopWithAdd = shops.filter((shop) => shop.id === newDrink.shop_id)
    console.log(shopWithAdd)
    setShops((currentShopsState) => ({...currentShopsState, shopWithAdd: newDrink}))
  }

  function handleDeleteDrink(deletedDrink){
    //shops with the id of deleted drink shop id
    const shopWithDelete = shops.filter((shop) => shop.id === deletedDrink.shop_id)
    //console.log(shopWithDelete[0].drinks)
    const updatedDrinks = shopWithDelete[0].drinks.filter((drink)=> drink.id !== deletedDrink.id)
    console.log(updatedDrinks)
    setShops((currentShopsState) => ({...currentShopsState, shopWithDelete: updatedDrinks}))
    //    function handleChange(event){
    //  setNewSong((currentSongState)=> (
    //    {...currentSongState, [event.target.name]: event.target.value}
    //))}

  }

  return(
    <>
      <Header />
      <Switch>
        <Route path='/shops/:id/newdrink'>
          <NewDrink
          shops={shops} 
          onAddDrink={handleAddDrink}
          />
        </Route>
        <Route path='/shops/new'>
          <NewShop 
          onAddShop={handleAddShop}
          />
        </Route>
        <Route path='/shops/:id/edit'>
          <EditShop 
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