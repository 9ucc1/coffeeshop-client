import React, {useState} from 'react'
import {Link} from 'react-router-dom'

function NewDrink({onAddShop}){

    const initialNewShop = {
        name: "",
        location: "",
        description: ""
    }

    const [newShop, setNewShop] = useState(initialNewShop)

    function handleChange(event){
        setNewShop((currentShopState)=>(
            {...currentShopState, [event.target.name]: event.target.value}
        ))
        //console.log(newShop)
    }

    function handleSubmit(event){
        event.preventDefault()
        //console.log(newShop)
        const formData = {
            name: newShop.name,
            location: newShop.location,
            description: newShop.description
        }
        //console.log("form", formData)
        fetch(`http://localhost:9292/shops`,{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData)
        })
        .then((r)=>r.json())
        .then((shop)=>onAddShop(shop))
        setNewShop(initialNewShop)
    }

    return (
        <div>
            new shop form
            <form>
            <h3>Shop Name
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
                <input 
                    type="text" name="description"
                    value={newShop.description}
                    onChange={handleChange}
                    placeholder="enter text"
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