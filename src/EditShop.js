import React, {useState} from 'react'
import {useParams, Link, useHistory} from 'react-router-dom'
import styled from 'styled-components'

function EditShop({shops, onEditShop, onDeleteShop}){

    //when shop is deleted, delete its drinks too

    const FormHeader = styled.div`
    font-size: 1em;
    font-weight: bold;
    text-align: center;
    color: black;
    padding-top: 100px;
    font-family: "Lucida Console", "Courier New", monospace;
    `;

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
        history.push(`/shops/${params.id}`)
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
        //can I delete the shop's drinks in the same go
    }

    return (
        <div>
            <FormHeader>edit {shopToEdit.name}'s info</FormHeader>
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