import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import apiUrl from '../../apiConfig'

export default function CampaignDetail() {
    
    const[detailedCampaign, setDetailedCampaign] = useState([])

    useEffect(() => {
        console.log('getting item')
        getCampaign()
      }, [])

    let newParam = useParams()  

    const getCampaign = () => {
        fetch(apiUrl + `/campaigns/${newParam.id}`)
        .then(response=>response.json())
        .then(foundCampaign => {
            setDetailedCampaign(foundCampaign.campaign)
            console.log('singleItem ', foundCampaign.campaign)
        })

    }
    
    return (
        <div>
            <h1>detail page</h1>
            <h1>{detailedCampaign.name}</h1>
            <p>{detailedCampaign.cause}</p>
            <small>{detailedCampaign.location}</small>
        </div>
    )
}

