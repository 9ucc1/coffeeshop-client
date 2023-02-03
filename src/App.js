import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './Header.js' 
import Homepage from './Homepage.js'
import Shops from './Shops.js'
import NewDrink from './NewDrink.js'
import DrinkMenu from './DrinkMenu.js'

// deploy: render, netlify, aws(big one)
// osi model

//fetch here and pass it down
//RESTful routes

/*
        <Route exact path={`/shops/${id}`}>
          <DrinkMenu
            shopname={shopname}
            drinks={drinks}
            location={location}
            shopid={id}
          />
        </Route>
        <Route path={`/shops/${id}/drinks/new`}>
          <NewDrink/>
        </Route>
      */


function App() {

  const [shops, setShops] = useState([])

  useEffect(()=>{
      fetch("http://localhost:9292/shops")
      .then(response=>response.json())
      .then(response=>{
        setShops(response)
    })
  }, [])

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


export default App;