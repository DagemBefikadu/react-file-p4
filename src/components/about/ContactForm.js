import React from 'react'
import apiUrl from '../../apiConfig';
import { useState } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom";
import { Form, Modal, Button } from 'react-bootstrap/'


export default function ContactForm(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const params = useParams()

    const createComment = (e) => {
        e.preventDefault()
        console.log('firstName: ', e.target.firstName.value )
        console.log('lastName: ', e.target.lastName.value )
        console.log('email: ', e.target.email.value )
        console.log('message: ', e.target.message.value )
        // console.log('owner: ', props.user._id )
    axios({
        url: apiUrl + `/campaigns/${params.id}/contacts`,
        method: 'POST',
        data: {
            contact: {
                firstName: e.target.firstName.value,
                lastName: e.target.lastName.value,
                email: e.target.email.value,
                message: e.target.message.value 
            },
        },
    })
    .then(res => {
        console.log('server response:', res)
    })
    .then(() => {
        e.target.firstName.value = "" 
        e.target.lastName.value = "" 
        e.target.email.value = "" 
        e.target.message.value = "" 
    })
    .catch(err => console.log(err))
    }

    return (
        <>
        <Button variant="primary" onClick={handleShow}>
            Contact Us
        </Button>
        <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
            <Modal.Title>Edit Name Campaign</Modal.Title>
            </Modal.Header>
          <Form onSubmit={createComment}>
            <Form.Group>
                <Form.Label htmlFor="firstName">firstName</Form.Label>
                <Form.Control type="text" id="firstName" name="firstName" />
            </Form.Group>
            <Form.Group>
                <Form.Label htmlFor="lastName">lastName</Form.Label>
                <Form.Control type="text" id="lastName" name="lastName" />
            </Form.Group>
            <Form.Group>
                <Form.Label htmlFor="email">email</Form.Label>
                <Form.Control type="text" id="email" name="email" />
            </Form.Group>
            <Form.Group>
                <Form.Label htmlFor="message">message</Form.Label>
                <Form.Control type="text" id="message" name="message" />
            </Form.Group>
            <Form.Group>
                <Form.Control type="submit" value="Post" />
            </Form.Group>
            </Form>  
            </Modal>
        </>
    )
}