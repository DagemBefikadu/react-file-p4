import React from 'react'
import NewCampaign from './NewCampaign'
import SingleCampaign from './SingleCampaign'

export default function CampaignList(props) {
    const foundCampaigns = props.allCampaigns.map((c) => {
        console.log(c)
        return <SingleCampaign campaignItem={c} />
    })
    return (
        <div>
            <h1>Organizations: </h1>
            <NewCampaign user={props.user} reloadCampaign={props.reloadCampaign}/>
            {foundCampaigns}
        </div>
    )
}
