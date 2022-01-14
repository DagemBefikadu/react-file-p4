import React from 'react'
import { useParams } from "react-router-dom";
import { useState ,useEffect} from 'react'
import apiUrl from '../../apiConfig'
import axios from "axios";
import { Form, Modal, Button, Container, } from 'react-bootstrap/'


export default function NewComment(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [addComment, setAddComment] = useState([])

    let newParam = useParams()  

    const createdComment = (e) => {
        e.preventDefault()
        console.log("this is params:", newParam.id)
        // const newParams = "" + newParam
    axios({
        url: apiUrl + `/campaigns/${newParam.id}/comments`,
        method: "POST",
        headers: {
			Authorization: `Token token=${props.user.token}`,
		}, 
        data: {
            comment: {
                commented: e.target.newComment.value,
                campaignId: newParam.id,
                owner: props.user._id
            }
        }   
    })
    .then((res) => console.log("server response:", res))
    .then(() => {
        props.refreshComment()
        e.target.newComment.value = ""
    })
    .catch((err) => console.log(err));
}

    return (
        <>
        <Button variant="warning" onClick={handleShow}>
        Add Comment
        </Button>
        <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
            <Modal.Title>Create A Comment</Modal.Title>
            </Modal.Header>
            <Form.Text className="text-muted">
      Please sign-In to post your comment.
    </Form.Text>
        <Form.Group>
            <Form onSubmit={createdComment}>
                <Form.Group>
                    <Form.Label  htmlFor="newComment"></Form.Label>
                    <Form.Control className="mb-3"  type="text" id="newComment" name="newComment" />
                </Form.Group>
                <Form.Group>
                    <Form.Control type="submit"></Form.Control>
                </Form.Group>
            </Form>
        </Form.Group>
        </Modal>
        </>
    )
}
