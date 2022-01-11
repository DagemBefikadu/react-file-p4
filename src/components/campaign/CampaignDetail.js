import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import apiUrl from '../../apiConfig'
import Comment from "./Comment";

export default function CampaignDetail(props) {
    
    const[detailedCampaign, setDetailedCampaign] = useState([])

    const [allComment, setAllComment] = useState([]);

    useEffect(() => {
        // console.log('getting item')
        getCampaign()
      }, [])

    useEffect(() => {
        getComment();
        console.log("all Comment: ", allComment);
      }, []);

    let newParam = useParams()  

    const getCampaign = () => {
        fetch(apiUrl + `/campaigns/${newParam.id}`)
        .then(response=>response.json())
        .then(foundCampaign => {
            setDetailedCampaign(foundCampaign.campaign)
            // console.log('singleItem ', foundCampaign.campaign)
        })

    }

    const getComment = () => {
        fetch(apiUrl + `/campaigns/${newParam.id}/comments`)
            .then((response) => response.json())
            .then((foundComments) => {
            setAllComment(foundComments.comments);
            console.log(foundComments)
            })
            .catch((err) => {
            console.log(err);
            });
    }

    let commentList = allComment.map((c) => {
        console.log(c);
        return (
          <Comment
            comment={c}
            user={props.user}
            key={c._id}
          />
        );
      });
    
    return (
        <div>
            <h1>detail page</h1>
            <h1>{detailedCampaign.name}</h1>
            <p>{detailedCampaign.cause}</p>
            <small>{detailedCampaign.location}</small>
            <hr />
            {commentList}
        </div>
    )
}

