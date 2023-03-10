import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import styled from 'styled-components'

function NewDrink({onAddShop}){

    const FormHeader = styled.div`
    font-size: 1em;
    font-weight: bold;
    text-align: center;
    color: black;
    padding-top: 100px;
    font-family: "Lucida Console", "Courier New", monospace;
    `;

    const initialNewShop = {
        name: "",
        location: "",
        description: "",
        image: ""
    }

    const history = useHistory()

    const [newShop, setNewShop] = useState(initialNewShop)

    function handleChange(event){
        setNewShop((currentShopState)=>(
            {...currentShopState, [event.target.name]: event.target.value}
        ))
    }

    function handleSubmit(event){
        event.preventDefault()
        const formData = {
            name: newShop.name,
            location: newShop.location,
            description: newShop.description,
            image: newShop.image
        }
        fetch(`http://localhost:9292/shops`,{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData)
        })
        .then((r)=>r.json())
        .then((shop)=>onAddShop(shop))
        setNewShop(initialNewShop)
        history.push('/shops')
        alert('shop created!')
    }

    return (
        <div>
            <FormHeader>New Shop Form</FormHeader>
            <form>
            <h3>Shop Name: 
                <input 
                    type="text" name="name" 
                    value={newShop.name} 
                    onChange={handleChange}
                    placeholder="enter text"
                />
            </h3>
            <h3>Location: 
                <input 
                    type="text" name="location"
                    value={newShop.location}
                    onChange={handleChange}
                    placeholder="enter text"
                />
            </h3>
            <h3>Description: 
                <textarea 
                    type="text" name="description"
                    value={newShop.description}
                    onChange={handleChange}
                    placeholder="enter text"
                />
            </h3>
            <h3>Image URL:
                <input 
                    type="text" name="image"
                    value={newShop.image}
                    onChange={handleChange}
                    placeholder="enter URL"
                />
            </h3>
                <button type="submit" onClick={handleSubmit}>
                    Create New Shop
                </button>
        </form>
        <Link to="/shops">
            Back to Shops
        </Link>
        </div>
    )
}

export default NewDrink