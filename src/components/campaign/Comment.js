import React from 'react'


export default function Comment(props) {

    if (props.user && props.comment.owner === props.user._id){
        return (
            <>
               <div ><p>{props.comment.commented}</p></div>
               <small>{props.comment.owner.name} </small>
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
