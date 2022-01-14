import React from 'react'
import SingleCreatedCampaign from './SingleCreatedCampaign'
import { Link } from 'react-router-dom'
import { Button, Card } from 'react-bootstrap/'
import EditCampaign from '../campaign/EditCampaign'

const linkStyle = {
    color: 'white',
}

export default function MyCampaigns(props) {


    const myCampaign = props.myCampaigns.map((mc) => {
        console.log(mc)
        return <>
        <SingleCreatedCampaign MyOneCampaign={mc} />
        <Button className="ml-1 mt-3 mb-2" variant="danger" style={linkStyle} onClick={() => props.deleteCreatedCampaign(mc._id)}>Delete Campaign</Button>
        <Button className="ml-1 mt-3 mb-2" variant="secondary"><Link style={linkStyle}to={`/profile/edit/${mc._id}`}>Edit</Link></Button>
        </>
    })

    return (
        <div>
            <h3 style={linkStyle}>Created Campaigns</h3>
            {myCampaign}
            <EditCampaign />
        </div>
    )
}
