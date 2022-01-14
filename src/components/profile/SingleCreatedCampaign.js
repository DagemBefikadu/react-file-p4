import React from 'react'
import { Button, Card } from 'react-bootstrap/'
const groundStyle = {
    color: 'white',
    backgroundColor: '#D1BAB3',
}

export default function SingleCreatedCampaign(props) {
    return (
        <div>
            <Card className="mb-2 mt-2" style={{ width: '30rem' }}>
            <Card.Img variant="top" src={props.MyOneCampaign.image}  />
            <br />
            <Card.Text style={groundStyle} >
            <strong>Name:</strong> <small>{props.MyOneCampaign.name}</small>
            </Card.Text>
            </Card >
        </div>
    )
}
