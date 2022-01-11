import React from 'react'
import SingleCampaign from './SingleCampaign'

export default function CampaignList(props) {
    const foundCampaigns = props.allCampaigns.map((c) => {
        console.log(c)
        return <SingleCampaign campaignItem={c} />
    })
    return (
        <div>
            <h1>List of Campaigns go Here</h1>
            {foundCampaigns}
        </div>
    )
}
