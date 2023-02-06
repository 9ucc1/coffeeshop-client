import React from 'react'
import {useParams} from 'react-router-dom'

function EditShop({shops}){

    const params=useParams()

    return (
        <div>
            edit {shops[params.id].name}'s info
            <form></form>
        </div>
    )
}

export default EditShop