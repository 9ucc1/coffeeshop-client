import React, {useState} from 'react'
import {Link, useParams, useHistory} from 'react-router-dom'
import styled from 'styled-components'

function EditDrink({drinks, onEditDrink}){

    const FormHeader = styled.div`
    font-size: 1em;
    font-weight: bold;
    text-align: center;
    color: black;
    padding-top: 100px;
    font-family: "Lucida Console", "Courier New", monospace;
    `;

    const history = useHistory()
    const params = useParams()
    const drinkToEdit = drinks.find((drink)=> drink.id == params.id)
    
    const initialDrink = {
        name: drinkToEdit.name,
        description: drinkToEdit.description,
        price: drinkToEdit.price,
        ingredients: drinkToEdit.ingredients,
        image: drinkToEdit.image
    }

    const [editDrink, setEditDrink] = useState(initialDrink)
    const [decafStatus, setDecafStatus] = useState(drinkToEdit.decaf)

    function handleChange(event){
        console.log("change")
        setEditDrink(currentDrink => ({...currentDrink, [event.target.name]: event.target.value}))
        console.log(editDrink)
    }
    
    function handleDecafChange(event){
        setDecafStatus(event.target.checked)
        console.log("change")
    }

    function handleSubmit(event){
        event.preventDefault()
        console.log("change")
        const formData = {
            name: editDrink.name,
            description: editDrink.description,
            price: editDrink.price,
            ingredients: editDrink.ingredients,
            decaf: decafStatus,
            image: editDrink.image,
            shop_id: drinkToEdit.shop_id
        }
        fetch(`http://localhost:9292/drinks/${params.id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData)
        })
        .then(r=>r.json())
        .then(drink=>onEditDrink(drink))
        alert("changes saved!")
        history.push(`/shops/${drinkToEdit.shop_id}`)
    }

    return (
        <div>
            <FormHeader>Edit {drinkToEdit.name}</FormHeader>
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
            <h4>Image URL:
                <input 
                    type="text" name="image"
                    value={editDrink.image}
                    onChange={handleChange}
                    placeholder="enter URL"
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