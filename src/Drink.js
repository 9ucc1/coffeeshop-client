import React from 'react'


function Drink({drink, name, id, shopid, description, onDeleteDrink}){

    //console.log("drink!", drink)

    function handleDelete(){
        console.log("delete")
        fetch(`http://localhost:9292/shops/${shopid}/drinks/${drink.id}`, {
            method: "DELETE",
        })
        .then(r=>r.json())
        .then(()=>onDeleteDrink(drink))
    }

    return (
        <div>
            <h4>{name}</h4>
            <p>{description}</p>
            <button onClick={handleDelete}>Delete Drink</button>
        </div>
    )
}

export default Drink