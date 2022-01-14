import React from 'react'
import { useParams } from "react-router-dom";
import  { useState, useEffect } from 'react'
import apiUrl from '../../apiConfig'
import axios from "axios";
import ShowComment from "./ShowComment";
import NewComment from './NewComment';
import ShowContact from '../contact/ShowContact';

export default function Comment(props) {
    console.log("this is",props)
    const [allComment, setAllComment] = useState([]);

    useEffect(() => {
        getComment();
        console.log("all Comment: ", allComment);
      }, []);

      let newParam = useParams()  

      const getComment = () => {
        fetch(apiUrl + `/campaigns/${newParam.id}/comments`)
            .then((response) => response.json())
            .then((foundComments) => {
            setAllComment(foundComments.comments);
            console.log("list of comment",foundComments.comments)
            })
            .catch((err) => {
            console.log(err);
            });
    }


//     const [detailedContact, setDetailedContact] = useState([])

//     useEffect(() => {
//      console.log('getting contacts ')
//      getContact()
//    }, []);



//  const getContact = () => {
//      console.log("here is the campaignId", newParam)
//      // console.log("here is the campaignId", campaignId._id)
//     //  console.log("here is the campaignId", campaignId)
//      // console.log("here is cId", contactId)
//      fetch(`http://localhost:8000/campaigns/${newParam}/contacts`)
//      .then((response)=>response.json())
//      .then((foundContact) => {
//          setDetailedContact(foundContact)
//          console.log('single Contact', foundContact)
//      })
//      .catch((err) => {
//          console.log(err);
//      });
//  }

    // let caId = props.campaignId

    const deleteComment = (cId) => {
        console.log(cId)
        axios ({
          url: `http://localhost:8000/campaigns/${newParam.id}/comments/${cId}`,
          method: "DELETE",
          headers: {
            Authorization: `Token token=${props.user.token}`,
          },
        })
        .then((res) => console.log("server response:", res))
        .then(() => {
          getComment();
        })
        .catch((err) => console.log(err));
      }
  
      let commentList = allComment.map((c) => {
          console.log("this is a comment",c);
          return (
            <ShowComment
              comment={c}
              user={props.user}
              deleteComment={deleteComment}
              key={c._id}
            />
          );
        });

    return (
        <div>
            {commentList} 
            <br />
            <NewComment refreshComment={getComment} user={props.user} />
            {/* <p>detailedContact</p> */}
            {/* <ShowContact params={newParam} /> */}
        </div>
    )
}
