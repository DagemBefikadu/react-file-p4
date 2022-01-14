import React from 'react'
import { useState ,useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import apiUrl from '../../apiConfig';
import { Form, Modal, Button, Container, Col, Row } from 'react-bootstrap/'

export default function NewCampaign(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const [newCampaign, setNewCampaign] = useState([])
    
    const navigate = useNavigate()
    
    const createCampaign = (e) => {
        e.preventDefault()
        console.log('form data: ', e.target.value)
        console.log('name: ', e.target.name.value )
        console.log('description: ', e.target.cause.value )
        console.log('location: ', e.target.item.value )
        console.log('wbsite: ', e.target.website.value )
        console.log('category: ', e.target.category.value )
        // console.log('owner: ', props.user._id )
        console.log('e.target.image.value', e.target.image.value)
    axios({
        url: apiUrl + '/campaigns',
        method: 'POST',
        headers: {
			Authorization: `Token token=${props.user.token}`,
		},
        data: {
            campaign: {
                name:  e.target.name.value,
                cause: e.target.cause.value,
                location: e.target.location.value,
                item: e.target.item.value,
                wbsite: e.target.website.value,
                category: e.target.category.value,
                owner: props.user._id,
                image: e.target.image.value
            },
        },
    })
    .then(res => {
        console.log('server response:', res)
    })
    .then(() => {
        props.reloadCampaign()
        e.target.name.value = "" 
        e.target.cause.value = "" 
        e.target.location.value = "" 
        e.target.item.value = "" 
        e.target.website.value = "" 
        e.target.category.value  = "" 
        e.target.image.value = "" 
    })
    .catch(err => console.log(err))
    }
    
    return (
        <>
        <Button variant="primary" onClick={handleShow}>
        New Campaign
        </Button>
        <Container>
        <Modal show={show} onHide={handleClose} >
          <Form onSubmit={createCampaign} >
            <Modal.Header closeButton>
            <Modal.Title>Add a New Campaign</Modal.Title>
            </Modal.Header>
            <Form.Group  className="mb-3 mt-3">
                <Form.Label htmlFor="name">Name</Form.Label>
                <Form.Control type="text" id="name" name="name" />
            </Form.Group>
            <Form.Group  className="mb-3">
                <Form.Label htmlFor="cause">cause</Form.Label>
                <Form.Control type="text" id="cause" name="cause" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="item">item</Form.Label>
                <Form.Control type="text" id="item" name="item" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="location">location</Form.Label>
                <Form.Control type="text" id="location" name="location" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="website">website</Form.Label>
                <Form.Control type="text" id="website" name="website" />
            </Form.Group>
            <Form.Group>
                <Form.Label htmlFor="category">category</Form.Label>
                <Form.Control type="text" id="category" name="category" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="image">image</Form.Label>
                <Form.Control type="text" id="image" name="image" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control onClick={handleClose} type="submit" value="Create"></Form.Control> 
            </Form.Group>
            </Form>  
        </Modal>
        </Container>
        </>
    )
}
