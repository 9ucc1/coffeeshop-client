import React, {useState} from 'react'
import {useParams, useHistory, Link} from 'react-router-dom'
import styled from 'styled-components'

function NewDrink({shops, onAddDrink}){

    const FormHeader = styled.div`
    font-size: 1em;
    font-weight: bold;
    text-align: center;
    color: black;
    padding-top: 100px;
    font-family: "Lucida Console", "Courier New", monospace;
    `;

    const params=useParams()
    const history=useHistory()

    const initialNewDrink = {
        name: "",
        ingredients: "",
        description: "",
        price: "",
        image: ""
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
            image: newDrink.image,
            shop_id: params.id
        }
        console.log("formData submitted:", formData)
        fetch(`http://localhost:9292/drinks`,{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData),
        })
        .then(r=>r.json())
        .then(drink=>onAddDrink(drink))
        setNewDrink(initialNewDrink)
        setDecafStatus(false)
        history.push(`/shops/${params.id}`)
        alert('drink created!')
    }

    function handleDecafChange(event){
        setDecafStatus(event.target.checked)
    }

    function handleChange(event){
        setNewDrink((currentNewDrink)=>(
            {...currentNewDrink, [event.target.name]: event.target.value}
        ))
    }

    return(
        <div>
            <FormHeader>New Drink</FormHeader>
            <form>
            <h4>Drink Name:
                <input 
                    type="text" name="name" 
                    value={newDrink.name} 
                    onChange={handleChange}
                    placeholder="enter text"
                />
            </h4>
            <h4>Ingredients:
                <textarea 
                    type="text" name="ingredients"
                    value={newDrink.ingredients}
                    onChange={handleChange}
                    placeholder="enter text"
                />
            </h4>
            <h4>Description:
                <textarea 
                    type="text" name="description"
                    value={newDrink.description}
                    onChange={handleChange}
                    placeholder="enter text"
                />
            </h4>
            <h4>Price:
                <input 
                    type="text" name="price"
                    value={newDrink.price}
                    onChange={handleChange}
                    placeholder="enter text"
                />
            </h4>
            <h4>Image URL:
                <input 
                    type="text" name="image"
                    value={newDrink.image}
                    onChange={handleChange}
                    placeholder="enter URL"
                />
            </h4>
            <label>Is this a decaf drink?</label>
            <input
                type="checkbox" name="decaf" onChange={handleDecafChange} checked={decafStatus}
            />
                <button type="submit" onClick={handleSubmit}>
                    Add to Menu
                </button>
        </form>
        <Link to={`/shops/${params.id}`}>
                Back to Menu
        </Link>
        </div>
    )
}

export default NewDrink