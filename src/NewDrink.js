import React, {useState} from 'react'
import {useParams, Link} from 'react-router-dom'

function NewDrink({shops, onAddDrink}){

    //have a button to get back to the menu
    //useHistory(?) to reroute after form submit
    const params=useParams()
    //const drinkShop = shops.find(shop=>shop.id == params.id)
    //console.log(drinkShop)

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
            //shop_id: shops[params.id].id
            //shop_id: drinkShop.id
            shop_id: params.id
        }
        console.log("formData submitted:", formData)
        fetch(`http://localhost:9292/shops/${params.id}/drinks`,{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData),
        })
        .then(r=>r.json())
        .then(drink=>onAddDrink(drink))
        setNewDrink(initialNewDrink)
        setDecafStatus(false)
        alert('drink created!')
    }

    function handleDecafChange(event){
        setDecafStatus(event.target.checked)
    }

    function handleChange(event){
        setNewDrink((currentNewDrink)=>(
            {...currentNewDrink, [event.target.name]: event.target.value}
        ))
        //console.log(newDrink)
    }

    return(
        <div>
            new drink {/*shops[params.id].name // drinkShop.name*/}
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
                <input 
                    type="text" name="ingredients"
                    value={newDrink.ingredients}
                    onChange={handleChange}
                    placeholder="enter text"
                />
            </h4>
            <h4>Description:
                <input 
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
            <label>Is this a decaf drink?</label>
            <input
                type="checkbox" name="decaf" onChange={handleDecafChange} checked={decafStatus}
            />
                <button type="submit" onClick={handleSubmit}>
                    Add to {/*shops[params.id].name // drinkShop.name*/}'s Menu
                </button>
        </form>
        <Link to={`/shops/${params.id}`}>
                Back to Menu
        </Link>
        </div>
    )
}

export default NewDrink