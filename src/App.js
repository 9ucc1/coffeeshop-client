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

  function handleAddShop(newShop){
    console.log("app add shop", newShop)
    setShops([...shops, newShop])
  }

  function handleEditShop(editedShop){
    console.log("app edit shop", editedShop)
    const updatedShops = shops.map(shop => shop.id === editedShop.id ? editedShop : shop)
    setShops(updatedShops)
  }

  function handleDeleteShop(deletedShop){
    console.log("app delete shop", deletedShop)
    const updatedShops = shops.filter((shop) => shop.id !== deletedShop.id)
    setShops(updatedShops)
  }

  function handleAddDrink(newDrink){
    console.log("app add drink:", newDrink)
    const shopToUpdate = shops.find((shop) => shop.id === newDrink.shop_id)
    const updatedDrinks = [...shopToUpdate.drinks, newDrink]
    shopToUpdate.drinks = updatedDrinks
    const updatedShops = shops.map(shop => shop.id === shopToUpdate.id ? shopToUpdate : shop)
    setShops(updatedShops)
  }

  function handleDeleteDrink(deletedDrink){
    console.log("app delete drink:", deletedDrink)
    const shopToUpdate = shops.find((shop) => shop.id === deletedDrink.shop_id)
    const updatedDrinks = shopToUpdate.drinks.filter((drink)=> drink.id !== deletedDrink.id)
    shopToUpdate.drinks = updatedDrinks
    const updatedShops = shops.map(shop => shop.id === shopToUpdate.id ? shopToUpdate : shop)
    setShops(updatedShops)
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
          onEditShop={handleEditShop}
          onDeleteShop={handleDeleteShop}
          />
        </Route>
        <Route path='/shops/:id'>
          <DrinkMenu
          shops={shops}
          key={shops.id}
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