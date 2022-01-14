import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card } from 'react-bootstrap/'
const linkStyle = {
    color: 'white',
    textDecoration: 'none',
	marginRight:  '30px'
}

const backgroundStyle = {
    color: 'white',
    backgroundColor: '#C4A69D',
}

const groundStyle = {
    color: 'white',
    backgroundColor: '#D1BAB3',
}

export default function SingleCampaign(props) {
    return (
        <div>
            <Card style={{ width: '18rem' }} className="mb-3 mt-5">
            <Card.Img variant="top" src={props.campaignItem.image}  />
            <Card.Body style={groundStyle}>
            <Card.Title> Name: {props.campaignItem.name}</Card.Title>
            <Card.Text>Cause: {props.campaignItem.cause}</Card.Text>    
                {/* <li><img src={props.campaignItem.image} /></li> */}
            <Button size="sm" style={backgroundStyle}>Detail: <Link style={linkStyle} to={`/campaigns/${props.campaignItem._id}`}>{props.campaignItem.name}</Link></Button>
            </Card.Body>
            </Card>
        </div>

    )
}
{/* <Card.Title><Button size= 'm'style={buttonStyle}><Link style={buttonStyle}to={`/listeditems/${props.listing._id}`}>{props.listing.name}</Link></Button></Card.Title> */}
