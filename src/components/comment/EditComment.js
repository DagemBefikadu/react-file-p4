import axios from 'axios'
import React from 'react'
import  { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import apiUrl from '../../apiConfig'

export default function EditComment(props) {
    const [oldComment, setOldComment] = useState([])

    const commentId = useParams()
    const campaignId = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        getCommnet()
    }, [])

    const getCommnet = () => {
        // console.log("here is the commentId", campaignId.id)
        // console.log("here is cId", campaignId.campaignId)
        axios({ 
            url: apiUrl + `/campaigns/${campaignId}/comments/${campaignId.id}`,
            method: "GET"
        })
        .then (res => {
            setOldComment(res.data.comment)
        })
        .catch(err => console.log(err))
    }

    const handleChange = (e) => {
        setOldComment({...oldComment, [e.target.name]: e.target.value})
    }

    const editComment = (e) => {
        e.preventDefault()
        console.log('newComment: ', e.target.newComment.value)
        console.log('axios call: ', commentId.id)
        axios({
            url: apiUrl + `/comments/${commentId.id}`,
            method: 'PATCH',
            headers: {
                Authorization: `Token token=${props.user.token}`,
            },
            data: {
                comment: {
                    commented: e.target.newComment.value
                },
            },
        })
        .then(res => {
            console.log('server response:', res)
        })
        .then(() => {
            e.target.newComment.value = "" 
            navigate('/campaigns') 
        })
        .catch(err => console.log(err))
    }



    return (
        <div>
            <form onSubmit={editComment}>
                <div>
                    <label htmlFor="newComment"></label>
                    <input type="text" id="newComment" name="newComment" value={oldComment.newComment} onChange={handleChange}  />
                </div>
                <div>
                    <input type="submit" value="Post"></input>
                </div>
            </form> 
        </div>
    )
}
