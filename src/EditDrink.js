import React, {useState} from 'react'
import {Link, useParams} from 'react-router-dom'

function EditDrink({drinks, onEditDrink}){

    const params=useParams()
    const drinkToEdit = drinks.find((drink)=> drink.id == params.id)
    
    const initialDrink={
        name: drinkToEdit.name,
        description: drinkToEdit.description,
        price: drinkToEdit.price,
        ingredients: drinkToEdit.ingredients
    }

    const [editDrink, setEditDrink] = useState(initialDrink)
    const [decafStatus, setDecafStatus] = useState(drinkToEdit.decaf)

    function handleChange(event){
        console.log("change")
        setEditDrink(currentDrink => ({...currentDrink, [event.target.name]: event.target.value}))
    }
    
    function handleDecafChange(event){
        console.log("change")
    }

    function handleSubmit(event){
        event.preventDefault()
        console.log("change")
    }

    return (
        <div>
            Edit {drinkToEdit.name}
            <form>
            <h4>Name:
                <input 
                    type="text" name="name"
                    value={editDrink.name}
                    onChange={handleChange}
                    placeholder="enter text"
                />
            </h4>
            <h4>Description:
                <textarea 
                    type="text" name="description"
                    value={editDrink.description}
                    onChange={handleChange}
                    placeholder="enter text"
                />
            </h4>
            <h4>Price:
                <input 
                    type="text" name="price"
                    value={editDrink.price}
                    onChange={handleChange}
                    placeholder="enter text"
                />
            </h4>
            <h4>Ingredients:
                <textarea 
                    type="text" name="ingredients"
                    value={editDrink.ingredients}
                    onChange={handleChange}
                    placeholder="enter text"
                />
            </h4>
            <label>Is this a decaf drink?</label>
            <input
                type="checkbox" name="decaf" onChange={handleDecafChange} checked={decafStatus}
            />
            <br></br>
                <button type="submit" onClick={handleSubmit}>
                    Save Changes
                </button>
            </form>
            <Link to={`/shops/${drinkToEdit.shop_id}`}>
                Back to Menu
            </Link>
        </div>
    )
}

export default EditDrink