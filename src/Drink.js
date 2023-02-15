import React from 'react'
import {Link} from 'react-router-dom'

function Drink({drink, image, name, id, decaf, ingredients, price, description, onDeleteDrink}){

    function handleDelete(){
        console.log("delete")
        fetch(`http://localhost:9292/drinks/${id}`, {
            method: "DELETE",
        })
        .then(r=>r.json())
        .then(()=>onDeleteDrink(drink))
    }

    return (
        <div>
            <img src={image}></img>
            <h4>{name}</h4>
            <p>Price: {price}</p>
            <p>Description: {description}</p>
            <p>Contains caffeine: {decaf ? "No" : "Yes"}</p>
            <p>Ingredients: {ingredients}</p>
            <Link to={`/drinks/${id}/edit`}>Edit Drink</Link>
            <br></br>
            <button onClick={handleDelete}>Delete Drink</button>
        </div>
    )
}

export default Drink