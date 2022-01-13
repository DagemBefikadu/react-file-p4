import React from 'react'
import SingleCreatedCampaign from './SingleCreatedCampaign'
import { Link } from 'react-router-dom'


export default function MyCampaigns(props) {


    const myCampaign = props.myCampaigns.map((mc) => {
        console.log(mc)
        return <>
        <SingleCreatedCampaign MyOneCampaign={mc} />
        <button onClick={() => props.deleteCreatedCampaign(mc._id)}>Delete Campaign</button>
        <button><Link to={`/profile/edit/${mc._id}`}>Edit</Link></button>
        </>
    })

    return (
        <div>
            <h1>Created Campaigns</h1>
            {myCampaign}
        </div>
    )
}
