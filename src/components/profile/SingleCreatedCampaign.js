import React from 'react'
import { Button, Card } from 'react-bootstrap/'

export default function SingleCreatedCampaign(props) {
    return (
        <div>
            <Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src={props.MyOneCampaign.image}  />
            <br />
            <Card.Text>
            <strong>Name:</strong> <small>{props.MyOneCampaign.name}</small>
            </Card.Text>
            </Card>
        </div>
    )
}
