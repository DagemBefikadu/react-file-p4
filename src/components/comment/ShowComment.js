import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap/'
const groundStyle = {
    color: 'white'
}

export default function ShowComment(props) {
    //     console.log("owner id",props.comment.owner._id)
    console.log("campaing id",props.comment.campaignId)
    if (props.user && props.comment.owner._id === props.user._id){
        return (
            <>
               <div style={groundStyle}><p>{props.comment.commented}</p></div>
               <small style={groundStyle}>{props.comment.owner.name} </small>
               <br />
               <Button className="mb-4" variant="danger" onClick={() => props.deleteComment(props.comment._id)}>Delete</Button>
               <Button className="mb-4" variant="warning"><Link to={`/campaigns/${props.comment.campaignId}/edit/${props.comment._id}`}>Edit</Link></Button>
            </>
       )
        } else {        
    return (
        <div>
            <p>{props.comment.commented}</p>
            <small>-{props.comment.owner.name}</small>
        </div>
    )}
}
