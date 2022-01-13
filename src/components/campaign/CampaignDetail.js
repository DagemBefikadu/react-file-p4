import { useParams } from "react-router-dom";
import  { useState, useEffect } from 'react';
// import { useNavigate } from "react-router-dom";
import apiUrl from '../../apiConfig'
// import ShowComment from "../comment/ShowComment";
import Comment from "../comment/Comment";

//import axios
// import axios from "axios";

export default function CampaignDetail(props) {
    
    const[detailedCampaign, setDetailedCampaign] = useState([])

    // const [allComment, setAllComment] = useState([]);

    useEffect(() => {
        // console.log('getting item')
        getCampaign()
      }, [])

    // useEffect(() => {
    //     getComment();
    //     console.log("all Comment: ", allComment);
    //   }, []);

    let newParam = useParams()  

    const getCampaign = () => {
        fetch(apiUrl + `/campaigns/${newParam.id}`)
        .then(response=>response.json())
        .then(foundCampaign => {
            setDetailedCampaign(foundCampaign.campaign)
            console.log('singleItem with comment ', foundCampaign.campaign.comment)
        })

    }

    // const getComment = () => {
    //     fetch(apiUrl + `/campaigns/${newParam.id}/comments`)
    //         .then((response) => response.json())
    //         .then((foundComments) => {
    //         setAllComment(foundComments.comments);
    //         // console.log(foundComments)
    //         })
    //         .catch((err) => {
    //         console.log(err);
    //         });
    // }

    // const deleteComment = (cId) => {
    //   axios ({
    //     url: apiUrl + `/comments/${cId}`,
    //     method: "DELETE",
    //     headers: {
    //       Authorization: `Token token=${props.user.token}`,
    //     },
    //   })
    //   .then((res) => console.log("server response:", res))
    //   .then(() => {
    //     getComment();
    //   })
    //   .catch((err) => console.log(err));
    // }

    // let commentList = allComment.map((c) => {
    //     console.log(c);
    //     return (
    //       <ShowComment
    //         comment={c}
    //         user={props.user}
    //         deleteComment={deleteComment}
    //         key={c._id}
    //       />
    //     );
    //   });
    
    return (
        <div>
            <h1>detail page</h1>
            <h1>{detailedCampaign.name}</h1>
            <p>{detailedCampaign.cause}</p>
            <small>{detailedCampaign.location}</small>
            <hr />
            <h4>
            Comment Section: asfdsf
            </h4>
            {<Comment campaignId = {newParam.id} user ={props.user}/>}
            {/* {commentList} */}
        </div>
    )
}

