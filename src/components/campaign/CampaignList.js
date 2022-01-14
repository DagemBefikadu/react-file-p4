import React from 'react'
import NewCampaign from './NewCampaign'
import SingleCampaign from './SingleCampaign'
import '../../../src/app.css'
const linkStyle = {
    color: 'white',

}

export default function CampaignList(props) {
    const foundCampaigns = props.allCampaigns.map((c) => {
        console.log(c)
        return <SingleCampaign campaignItem={c} />
    })
    return (
        <div>
            <h1 style={linkStyle}> </h1>
            <NewCampaign user={props.user} reloadCampaign={props.reloadCampaign}/>
            <ol id='ol'>
            {foundCampaigns}
            </ol>
        </div>
    )
}
