import React, {useState} from 'react'

function NewDrink(){

    const initialNewShop = {
        name: "",
        location: "",
        description: ""
    }
    
    const [newShop, setNewShop] = useState(initialNewShop)

    function handleChange(event){
        console.log('change')
    }

    function handleSubmit(event){
        event.preventDefault()
        console.log('shop submit')
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
        <button>Back to Shops</button>
        </div>
    )
}

export default NewDrink