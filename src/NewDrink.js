import React, {useState} from 'react'
import {useParams} from 'react-router-dom'

function NewDrink({shops, onAddDrink}){

    //have a button to get back to the menu
    //useHistory(?) to reroute after form submit
    const params=useParams()
    //console.log(params)

    const initialNewDrink = {
        name: "",
        ingredients: "",
        description: "",
        price: ""
    }

    const [newDrink, setNewDrink] = useState(initialNewDrink)
    const [decafStatus, setDecafStatus] = useState(false)

    //console.log(decafStatus)

    function handleSubmit(event){
        event.preventDefault()
        console.log("submit button clicked")
        const formData={
            name: newDrink.name,
            decaf: decafStatus,
            price: newDrink.price,
            ingredients: newDrink.ingredients,
            description: newDrink.description,
            shop_id: shops[params.id].id
        }
        console.log(formData)
        fetch(`http://localhost:9292/shops/${shops[params.id].id}/drinks`,{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData),
        })
        .then(r=>r.json())
        .then(drink=>onAddDrink(drink))
        setNewDrink(initialNewDrink)
        setDecafStatus(false)
    }

    function handleDecafChange(event){
        setDecafStatus(event.target.checked)
    }

    return(
        <div>
            new drink for {shops[params.id].name}
            <form>
            <h3>Drink Name:
                <input 
                    type="text" name="name" 
                    value="name" 
                    placeholder="enter text"
                />
            </h3>
            <h3>Ingredients:
                <input 
                    type="text" name="ingredients"
                    value="ingredients"
                    placeholder="enter text"
                />
            </h3>
            <h3>Description:
                <input 
                    type="text" name="description"
                    value="description"
                    placeholder="enter text"
                />
            </h3>
            <h3>Price:
                <input 
                    type="text" name="price"
                    value="price"
                    placeholder="enter text"
                />
            </h3>
            <label>Is this a decaf drink?</label>
            <input
                type="checkbox" name="decaf" onChange={handleDecafChange} checked={decafStatus}
            />
                <button type="submit" onClick={handleSubmit}>
                    Add to {shops[params.id].name}'s Menu
                </button>
        </form>
        <button>Back to Menu</button>
        </div>
    )
}

export default NewDrink