import React from 'react'
import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import apiUrl from '../../apiConfig';

export default function EditCampaign(props) {
    const [oldCampaign, setOldCampaign] = useState([])

    useEffect(() => {
        getCampaign()
    }, [])

    const campaignId = useParams()
    const navigate = useNavigate()
    
    //GET the current campaign so you can edit it and change the state
    const getCampaign = () => {
        console.log("this this is the id of the old campaign", campaignId)
        axios({ 
            url: apiUrl + `/campaigns/${campaignId.id}`,
            method: "GET"
        })
        .then (res => {
            setOldCampaign(res.data.campaign)
        })
        .catch(err => console.log(err))
    }

    //create the handle change because this is an edit so we need to change it before submitting
    const handleChange = (e) => {
        setOldCampaign({...oldCampaign, [e.target.name]: e.target.value})
    }

    //PATCH Route
    const editCampaign = (e) => {
        e.preventDefault()
        console.log('name: ', e.target.name.value )
        console.log('description: ', e.target.cause.value )
        console.log('location: ', e.target.item.value )
        console.log('wbsite: ', e.target.website.value )
        console.log('category: ', e.target.category.value )
        // console.log('owner: ', props.user._id )
        console.log('e.target.image.value', e.target.image.value)
    axios({
        url: apiUrl + `/campaigns/${campaignId.id}`,
        method: 'PATCH',
        headers: {
			Authorization: `Token token=${props.user.token}`,
		},
        data: {
            campaign: {
                name:  e.target.name.value,
                cause: e.target.cause.value,
                location: e.target.location.value,
                item: e.target.item.value,
                website: e.target.website.value,
                category: e.target.category.value,
                image: e.target.image.value
            },
        },
    })
    .then(res => {
        console.log('server response:', res)
    })
    .then(() => {
        e.target.name.value = "" 
        e.target.cause.value = "" 
        e.target.location.value = "" 
        e.target.item.value = "" 
        e.target.website.value = "" 
        e.target.category.value  = "" 
        e.target.image.value = ""
        navigate('/profile') 
    })
    .catch(err => console.log(err))
    }

    return (
        <>
        <h1>Edit Name Campaign</h1>
          <form onSubmit={editCampaign}>
            <div>
                <label htmlFor="name">names</label>
                <input type="text" id="name" name="name" value={oldCampaign.name} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="cause">cause</label>
                <input type="text" id="cause" name="cause" value={oldCampaign.cause} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="item">item</label>
                <input type="text" id="item" name="item" value={oldCampaign.item} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="location">location</label>
                <input type="text" id="location" name="location" value={oldCampaign.location} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="website">website</label>
                <input type="text" id="website" name="website" value={oldCampaign.website} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="category">category</label>
                <input type="text" id="category" name="category" value={oldCampaign.category} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="image">image</label>
                <input type="text" id="image" name="image" value={oldCampaign.image} onChange={handleChange}/>
            </div>
            <div>
                <input type="submit" value="Post" />
            </div>
            </form>  
        </>
    )
}
