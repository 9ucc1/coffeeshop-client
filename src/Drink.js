import React from 'react'
import {Link} from 'react-router-dom'

function Drink({drink, name, id, decaf, ingredients, shopid, description, onDeleteDrink}){

    function handleDelete(){
        /*console.log("delete")
        fetch(`http://localhost:9292/shops/${shopid}/drinks/${drink.id}`, {
            method: "DELETE",
        })
        .then(r=>r.json())
        .then(()=>onDeleteDrink(drink))*/
        console.log("delete")
        fetch(`http://localhost:9292/drinks/${drink.id}`, {
            method: "DELETE",
        })
        .then(r=>r.json())
        .then(()=>onDeleteDrink(drink))
    }

    //makes drinks editable

    return (
        <div>
            <h4>{name}</h4>
            <p>Description: {description}</p>
            <p>Contains caffeine: {decaf ? "No" : "Yes"}</p>
            <p>Ingredients: {ingredients}</p>
            <Link to=''>Edit Drink</Link>
            <br></br>
            <button onClick={handleDelete}>Delete Drink</button>
        </div>
    )
}

export default Drink