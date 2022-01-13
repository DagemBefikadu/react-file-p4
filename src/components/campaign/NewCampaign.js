import React from 'react'
import { useState ,useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import apiUrl from '../../apiConfig';

export default function NewCampaign(props) {
    const [newCampaign, setNewCampaign] = useState([])
    
    const navigate = useNavigate()
    
    const createCampaign = (e) => {
        e.preventDefault()
        console.log('form data: ', e.target.value)
        console.log('name: ', e.target.name.value )
        console.log('description: ', e.target.cause.value )
        console.log('location: ', e.target.item.value )
        console.log('wbsite: ', e.target.website.value )
        console.log('category: ', e.target.category.value )
        // console.log('owner: ', props.user._id )
        console.log('e.target.image.value', e.target.image.value)
    axios({
        url: apiUrl + '/campaigns',
        method: 'POST',
        headers: {
			Authorization: `Token token=${props.user.token}`,
		},
        data: {
            campaign: {
                name:  e.target.name.value,
                cause: e.target.cause.value,
                location: e.target.location.value,
                item: e.target.item.value,
                wbsite: e.target.website.value,
                category: e.target.category.value,
                owner: props.user._id,
                image: e.target.image.value
            },
        },
    })
    .then(res => {
        console.log('server response:', res)
    })
    .then(() => {
        props.reloadCampaign()
        e.target.name.value = "" 
        e.target.cause.value = "" 
        e.target.location.value = "" 
        e.target.item.value = "" 
        e.target.website.value = "" 
        e.target.category.value  = "" 
        e.target.image.value = "" 
    })
    .catch(err => console.log(err))
    }
    
    return (
        <>
        <h1>Create New Campaign</h1>
          <form onSubmit={createCampaign}>
            <div>
                <label htmlFor="name">names</label>
                <input type="text" id="name" name="name" />
            </div>
            <div>
                <label htmlFor="cause">cause</label>
                <input type="text" id="cause" name="cause" />
            </div>
            <div>
                <label htmlFor="item">item</label>
                <input type="text" id="item" name="item" />
            </div>
            <div>
                <label htmlFor="location">location</label>
                <input type="text" id="location" name="location" />
            </div>
            <div>
                <label htmlFor="website">website</label>
                <input type="text" id="website" name="website" />
            </div>
            <div>
                <label htmlFor="category">category</label>
                <input type="text" id="category" name="category" />
            </div>
            <div>
                <label htmlFor="image">image</label>
                <input type="text" id="image" name="image" />
            </div>
            <div>
                <input type="submit" value="Post" />
            </div>
            </form>  
        </>
    )
}
