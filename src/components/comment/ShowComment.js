import React from 'react'
import { Link } from 'react-router-dom'


export default function ShowComment(props) {
    //     console.log("owner id",props.comment.owner._id)
    console.log("campaing id",props.comment.campaignId)
    if (props.user && props.comment.owner._id === props.user._id){
        return (
            <>
               <div ><p>{props.comment.commented}</p></div>
               <small>{props.comment.owner.name} </small>
               <button  onClick={() => props.deleteComment(props.comment._id)}>Delete</button>
               <button><Link to={`/campaigns/${props.comment.campaignId}/edit/${props.comment._id}`}>Edit</Link></button>
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
