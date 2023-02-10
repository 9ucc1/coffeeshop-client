import React, {useState} from 'react'
import {useParams, Link, useHistory} from 'react-router-dom'

function EditShop({shops, onEditShop, onDeleteShop}){

    const history=useHistory()
    const params=useParams()
    const shopToEdit = shops.find((shop)=> shop.id == params.id)

    const initialShop = {
        location: shopToEdit.location,
        description: shopToEdit.location
    }

    const [editShop, setEditShop] = useState(initialShop)

    function handleChange(event){
        setEditShop((currentShop)=>(
            {...currentShop, [event.target.name]: event.target.value})
            )
        //console.log(editShop)
    }

    function handleSubmit(event){
        event.preventDefault()
        console.log("submit")
        const formData = {
            name: shopToEdit.name,
            location: editShop.location,
            description: editShop.description
        }
        fetch(`http://localhost:9292/shops/${params.id}`,{
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData)
        })
        .then((r)=>r.json())
        .then((shop)=>onEditShop(shop))
        alert("changes saved!")
    }

    function handleDelete(){
        fetch(`http://localhost:9292/shops/${params.id}`,{
            method: "DELETE",
        })
        .then((r)=>r.json())
        .then(shop=>onDeleteShop(shop))
        history.push("/shops")
        alert("shop deleted!")
    }

    return (
        <div>
            edit {shopToEdit.name}'s info
            <form>
            <h4>Location:
                <input 
                    type="text" name="location"
                    value={editShop.location}
                    onChange={handleChange}
                    placeholder="enter text"
                />
            </h4>
            <h4>Description:
                <input 
                    type="text" name="description"
                    value={editShop.description}
                    onChange={handleChange}
                    placeholder="enter text"
                />
            </h4>
                <button type="submit" onClick={handleSubmit}>
                    Save Changes
                </button>
        </form>

        <button onClick={handleDelete}>
            Delete Shop?
        </button>
        <br></br>
        <Link to={`/shops/${params.id}`}>
            Back to {shopToEdit.name}'s Menu
        </Link>
        </div>
    )
}

export default EditShop