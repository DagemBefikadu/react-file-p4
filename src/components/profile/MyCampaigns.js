import React from 'react'
import SingleCreatedCampaign from './SingleCreatedCampaign'
import { Link } from 'react-router-dom'
import { Button, Card } from 'react-bootstrap/'
import EditCampaign from '../campaign/EditCampaign'
const linkStyle = {
    color: 'white',
    textDecoration: 'none',
	marginRight:  '30px'
}

export default function MyCampaigns(props) {


    const myCampaign = props.myCampaigns.map((mc) => {
        console.log(mc)
        return <>
        <SingleCreatedCampaign MyOneCampaign={mc} />
        <Button variant="danger" style={linkStyle} onClick={() => props.deleteCreatedCampaign(mc._id)}>Delete Campaign</Button>
        <Button variant="secondary"><Link style={linkStyle}to={`/profile/edit/${mc._id}`}>Edit</Link></Button>
        </>
    })

    return (
        <div>
            <h3>Created Campaigns</h3>
            {myCampaign}
            <EditCampaign />
        </div>
    )
}
