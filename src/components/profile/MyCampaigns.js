import React from 'react'
import SingleCreatedCampaign from './SingleCreatedCampaign'

export default function MyCampaigns(props) {

    const myCampaign = props.myCampaigns.map((mc) => {
        console.log(mc)
        return <>
        <SingleCreatedCampaign MyOneCampaign={mc} />
        <button onClick={() => props.deleteCreatedCampaign(mc._id)}>Delete Campaign</button>
        </>
    })

    return (
        <div>
            <h1>Created Campaigns</h1>
            {myCampaign}
        </div>
    )
}
