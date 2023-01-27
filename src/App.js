import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './Header.js' 
import Homepage from './Homepage.js'
import CustomerForm from './CustomerForm'
import DrinkForm from './DrinkForm'
import OrderedDrinks from './OrderedDrinks'

function App() {
  return(
    <>
      <Header />
      <Switch>
        <Route path='/neworder'>
          <CustomerForm/>
          <DrinkForm/>
        </Route>
        <Route path='/orders'>
          <OrderedDrinks/>
        </Route>
        <Route path='/'>
          <Homepage/>
        </Route>
      </Switch>
    </>
  )
}


export default App;