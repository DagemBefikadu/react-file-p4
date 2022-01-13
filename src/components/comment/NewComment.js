import React from 'react'
import { useParams } from "react-router-dom";
import { useState ,useEffect} from 'react'
import apiUrl from '../../apiConfig'
import axios from "axios";

export default function NewComment(props) {
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
        <div>
            <form onSubmit={createdComment}>
                <div>
                    <label htmlFor="newComment"></label>
                    <input type="text" id="newComment" name="newComment" />
                    <button>Test</button>
                </div>
                <div>
                    <input type="submit"></input>
                </div>
            </form>
        </div>
    )
}
