import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card } from 'react-bootstrap/'
const linkStyle = {
    color: 'white',
    textDecoration: 'none',
	marginRight:  '30px'
}


export default function SingleCampaign(props) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.campaignItem.image}  />
            <Card.Body>
            <Card.Title> Name: {props.campaignItem.name}</Card.Title>
            <Card.Text>Cause: {props.campaignItem.cause}</Card.Text>    
                {/* <li><img src={props.campaignItem.image} /></li> */}
            <Button>Detail: <Link style={linkStyle} to={`/campaigns/${props.campaignItem._id}`}>{props.campaignItem.name}</Link></Button>
            </Card.Body>
            </Card>
        </div>
    )
}
{/* <Card.Title><Button size= 'm'style={buttonStyle}><Link style={buttonStyle}to={`/listeditems/${props.listing._id}`}>{props.listing.name}</Link></Button></Card.Title> */}
