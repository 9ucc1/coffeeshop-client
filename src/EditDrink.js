import React from 'react'

function EditDrink(){

    function handleChange(event){
        console.log("change")
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
            edit __
            <form>
            <h4>Description:
                <input 
                    type="text" name="description"
                    value="description"
                    onChange={handleChange}
                    placeholder="enter text"
                />
            </h4>
            <h4>Price:
                <input 
                    type="text" name="price"
                    value="price"
                    onChange={handleChange}
                    placeholder="enter text"
                />
            </h4>
            <h4>Ingredients:
                <input 
                    type="text" name="ingredients"
                    value="ingredients"
                    onChange={handleChange}
                    placeholder="enter text"
                />
            </h4>
            <label>Is this a decaf drink?</label>
            <input
                type="checkbox" name="decaf" onChange={handleDecafChange} checked="true"
            />
                <button type="submit" onClick={handleSubmit}>
                    Save Changes
                </button>
            </form>
        </div>
    )
}

export default EditDrink