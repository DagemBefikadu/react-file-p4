import React from 'react'
import { Link } from 'react-router-dom'

export default function SingleCampaign(props) {
    return (
        <div>
            <ul>
                <li>Name: {props.campaignItem.name}</li>
                {/* <li><img src={props.campaignItem.image} /></li> */}
                <li>Image</li>
            </ul>
            <button>Detail: <Link to={`/campaigns/${props.campaignItem._id}`}>{props.campaignItem.name}</Link></button>
        </div>
    )
}
{/* <Card.Title><Button size= 'm'style={buttonStyle}><Link style={buttonStyle}to={`/listeditems/${props.listing._id}`}>{props.listing.name}</Link></Button></Card.Title> */}
