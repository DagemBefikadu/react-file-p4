import React from 'react'
import CreatedCampaigns from './CreatedCampaigns'

export default function Profile(props) {
    
    return (
        <div>
            <h1>{props.user.name}</h1>
            <hr />
            <CreatedCampaigns user={props.user} reloadCampaign={props.reloadCampaign}/>

        </div>
    )
}
