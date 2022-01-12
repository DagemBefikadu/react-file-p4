import React from 'react'


export default function ShowComment(props) {
    if (props.user && props.comment.owner._id === props.user._id){
        return (
            <>
               
               <div ><p>{props.comment.commented}</p></div>
               <small>{props.comment.owner.name} </small>
               <button  onClick={() => props.deleteComment(props.comment._id)}>Delete</button>
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
